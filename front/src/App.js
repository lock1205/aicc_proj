import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './componet/LoginForm';
import SignupForm from './componet/SignupForm';
import MainPage from './componet/MainPage';
import { ToastContainer } from 'react-toastify';

// import AgreeFinish from './componet/AgreeFinish';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>

        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
