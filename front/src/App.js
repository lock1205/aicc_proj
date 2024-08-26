import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './componet/LoginForm';
import SignupForm from './componet/SignupForm';
import MainPage from './componet/MainPage';
import { ToastContainer } from 'react-toastify';
import AgreeFinish from './componet/AgreeFinish';

// import AgreeFinish from './componet/AgreeFinish';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/agreeFinsh" element={<AgreeFinish />} />{' '}
        {/* 나중에 메인페이지에서 빼야함 */}
      </Routes>

      <ToastContainer position="bottom-center" autoClose={100} theme="light" />
    </BrowserRouter>
  );
}

export default App;
