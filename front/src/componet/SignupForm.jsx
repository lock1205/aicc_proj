import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../design/SignupForm.css';
import '../design/bg.css';
import { toast } from 'react-toastify';

const SignupForm = () => {
  //const completeRegister = () => {};
  const [email, setEmail] = useState('');

  const [formData, setFormData] = useState({
    id: '',
    password: '',
    name: '',
    email: '',
    company: '',
    level: '',
    phone: '',
  });

  const handleChange = (e) => {
    //const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id) {
      console.log('formData id');
      toast.error('ID가 입력되지 않았습니다.');
      return;
    }
    if (!formData.password) {
      toast.error('password가 입력되지 않았습니다.');
      return;
    }
    if (!formData.name) {
      toast.error('성함이 입력되지 않았습니다.');
      return;
    }
    if (!formData.email) {
      toast.error('Email이 입력되지 않았습니다.');
      return;
    }
    if (!formData.company) {
      toast.error('회사명이 입력되지 않았습니다.');
      return;
    }
    if (!formData.level) {
      toast.error('직책이 입력되지 않았습니다.');
      return;
    }
    if (!formData.phone) {
      toast.error('연락처가 입력되지 않았습니다.');
      return;
    }
  };
  return (
    <div className="bg">
      <div className="Signup-wrapper">
        <div className="content">
          <div className="Signup-title">회원 등록</div>
          <form className="" onSubmit={handleSubmit}>
            <div className="id ">
              <p>
                ID
                {/*<h4 className="text-red-600">*필수 입력 사항*</h4> */}
              </p>
              <input
                className="bg-gray-300 text-gray-900"
                type="text"
                name="id"
                id=""
                placeholder="신규 입력"
                onChange={handleChange}
                value={formData.id}
              ></input>
            </div>
            <div className="password">
              <p>비밀번호</p>
              <input
                className="bg-gray-300 text-gray-900"
                type="password"
                name="password"
                id=""
                placeholder="20자이내"
                onChange={handleChange}
                value={formData.password}
              ></input>
            </div>
            <div className="name">
              <p>성함</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="name"
                id=""
                onChange={handleChange}
                value={formData.name}
              ></input>
            </div>
            <div className="email">
              <p>Email</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="email"
                id=""
                onChange={handleChange}
                value={formData.email}
              ></input>
            </div>
            <div className="company">
              <p>회사명</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="company"
                id=""
                onChange={handleChange}
                value={formData.company}
              ></input>
            </div>
            <div className="level">
              <p>직책</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="level"
                id=""
                onChange={handleChange}
                value={formData.level}
              ></input>
            </div>
            <div className="phone">
              <p>연락처</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="phone"
                id=""
                onChange={handleChange}
                placeholder="'-'부호는 빼주세요"
                value={formData.phone}
              ></input>
            </div>

            <div className="buttonBox">
              <Link to={'/'}>
                <button className="register " type="submit">
                  등록완료
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
