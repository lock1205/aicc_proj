import { Link } from 'react-router-dom';
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email ID: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <div>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default LoginForm;
