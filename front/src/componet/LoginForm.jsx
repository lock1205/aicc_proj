import { Link } from 'react-router-dom';
import { useState } from 'react';
import AlermModal from './AlermModal';
import '../design/LoginForm.css';
import '../design/bg.css';

function LoginForm() {
  // 로그인 컴포넌트
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  //폼 제출 시 호출
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setModalMessage(
          '서버에서 오류가 발생했습니다. 나중에 다시 시도해 주세요.'
        );
        setModalOpen(true);
        return;
      }

      const result = await response.json();

      if (result.success) {
        alert('로그인 성공!');
      } else {
        setModalMessage('등록된 아이디 또는 비밀번호가 잘못되었습니다.');
        setModalOpen(true);
      }
    } catch (error) {
      setModalMessage(
        '로그인 과정에서 오류가 발생했습니다. 다시 시도해 주세요.'
      );
      setModalOpen(true);
    }
  };

  // 모달을 닫는 함수
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg">
      <div className="lg_wrapper">
        <div className="lg_left">
          <h1>CUSTOMER LOGIN</h1>

          <h2>아이코에서 나만의 AI 솔루션을 커스터마이징 하세요!</h2>

          <form onSubmit={handleSubmit}>
            <div className="id">
              {/* <label>Email ID: </label> */}
              <input
                type="email"
                placeholder="E-mail ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="pw">
              {/* <label>Password:</label> */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="buttonBox">
              <button className="loginButton" type="submit">
                LOGIN
              </button>
            </div>
          </form>

          <div className="signup">
            <div>아직 AICO 회원이 아니신가요?</div>
            <Link to="/signup">회원가입</Link>
          </div>
        </div>
        <AlermModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          message={modalMessage}
        />
      </div>
    </div>
  );
}

export default LoginForm;
