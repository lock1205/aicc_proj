import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './componet/LoginForm';
import SignupForm from './componet/SignupForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        {/* <div className="LOGIN PAGE">
          <img src="" alt="" />
          <h1>CUSTOMER LOGIN</h1>
          <h2>아이코에서 나만의 AI 솔루션을 커스터마이징 하세요</h2>
        </div>
        <div className="SignupForm">
          <SignupForm />
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
