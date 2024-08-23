import React from 'react';

const SignupForm = () => {
  const completeRegister = () => {};
  return (
    <div className="wrapper_container">
      <div className="id">
        <p>ID</p>
        <textarea name="id" id=""></textarea>
      </div>
      <div className="password">
        <p>비밀번호</p>
        <textarea name="password" id=""></textarea>
      </div>
      <div className="name">
        <p>이름</p>
        <textarea name="name" id=""></textarea>
      </div>
      <div className="email">
        <p>Email</p>
        <textarea name="email" id=""></textarea>
      </div>
      <div className="company_name">
        <p>회사명</p>
        <textarea name="company_name" id=""></textarea>
      </div>
      <div className="level">
        <p>직책</p>
        <textarea name="level" id=""></textarea>
      </div>
      <div className="phone">
        <p>연락처</p>
        <textarea name="phone" id=""></textarea>
      </div>
      <button onClick={completeRegister}>등록완료</button>
    </div>
  );
};

export default SignupForm;
