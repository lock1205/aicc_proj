import { Link } from 'react-router-dom';
import '../design/LoginForm.css';

const { useState } = require('react');

function LoginForm() {
  // 로그인 컴포넌트
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //폼 제출 시 호출
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <div className="wrapper">
      <div className="left">
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
    </div>
  );
}

export default LoginForm;
