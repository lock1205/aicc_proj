import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { openModal } from '../redux/slice/modalSlice';
import { fetchPostItemData } from '../redux/slice/apiSlice';
import { features } from '../ai_info/data';
import { Link } from 'react-router-dom';

const ColaboAgreement = () => {
  const [formData, setFormData] = useState({
    user_key: '', //로그인된 회원의 로컬스토리지에서 가져온다.
    company_name: '',
    level: '',
    master_name: '',
    master_tel: '',
    end_date: '',
    sum_money: '',
    ai_data: '',
    ai_media: '',
    ai_lang: '',
    ai_image: '',
    title: '',
    description: '',
    status: '', //현재 협의서 상태를 리덕스 case문으로 넣는다
  });

  const [isDropOpen, setIsDropOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ modalType: 'register', task: null }));
  };

  const handleChange = (e) => {
    //const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) {
      toast.error('제목이 입력되지 않았습니다.');
      return;
    }
    if (!formData.company_name) {
      toast.error('회사명이 입력되지 않았습니다.');
      return;
    }
    if (!formData.level) {
      toast.error('직책이 입력되지 않았습니다.');
      return;
    }
    if (!formData.master_name) {
      toast.error('총괄자명이 입력되지 않았습니다.');
      return;
    }
    if (!formData.master_tel) {
      toast.error('총괄자 연락처가 입력되지 않았습니다.');
      return;
    }
    if (!formData.end_date) {
      toast.error('희망마감기한이 입력되지 않았습니다.');
      return;
    }
    if (!formData.sum_money) {
      toast.error('예상예산이 입력되지 않았습니다.');
      return;
    }

    try {
      handleOpenModal();
      await dispatch(fetchPostItemData(formData)).unwrap();
      toast.success('협의서 등록 완료');
    } catch (error) {
      console.error('Error adding task:', error);
      toast.error('협의서 등록 실패');
    }
  };

  return (
    <div>
      <div className="Signup-wrapper">
        <div className="content">
          <div className="Signup-title">협의서 입력</div>
          <form className="" onSubmit={handleSubmit}>
            <div className="id ">
              <p>
                제목
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

            <div className="decription">
              <p>요구사항</p>
              <textarea
                className="bg-gray-300 text-gray-900"
                name="phone"
                id=""
                onChange={handleChange}
                value={formData.phone}
              ></textarea>
            </div>

            <div className="company_name">
              <p>회사명</p>
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
            <div className="level">
              <p>직책</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="name"
                id=""
                onChange={handleChange}
                value={formData.name}
              ></input>
            </div>
            <div className="master_name">
              <p>총괄자명</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="email"
                id=""
                onChange={handleChange}
                value={formData.email}
              ></input>
            </div>
            <div className="master_tel">
              <p>연락처</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="company"
                id=""
                onChange={handleChange}
                value={formData.company}
              ></input>
            </div>
            <div className="end_date">
              <p>희망마감기한</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="level"
                id=""
                onChange={handleChange}
                value={formData.level}
              ></input>
            </div>
            <div className="sum_money">
              <p>예상예산</p>
              <input
                className="bg-gray-300 text-gray-900"
                name="phone"
                id=""
                onChange={handleChange}
                placeholder="'-'부호는 빼주세요"
                value={formData.phone}
              ></input>
            </div>
            <div className="need_tech">
              <div className="dropdown-box">
                <p>AI데이터기술</p>
                <label for="pet-select">기술 선택 : </label>

                <select name="pets" id="pet-select">
                  <option value="">--Please choose an option--</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                </select>
              </div>
              <div className="ai_media dropdown-box">
                <p>AI미디어기술</p>
                <input
                  className="bg-gray-300 text-gray-900"
                  name="phone"
                  id=""
                  onChange={handleChange}
                  placeholder="'-'부호는 빼주세요"
                  value={formData.phone}
                ></input>
              </div>
              <div className="ai_image">
                <p>AI이미지기술</p>
                <input
                  className="bg-gray-300 text-gray-900"
                  name="phone"
                  id=""
                  onChange={handleChange}
                  placeholder="'-'부호는 빼주세요"
                  value={formData.phone}
                ></input>
              </div>
              <div className="ai_lang">
                <p>AI생성을 위한 프로그래밍 언어</p>
                <input
                  className="bg-gray-300 text-gray-900"
                  name="phone"
                  id=""
                  onChange={handleChange}
                  placeholder="'-'부호는 빼주세요"
                  value={formData.phone}
                ></input>
              </div>
            </div>
            <div className="buttonBox">
              <Link to={'/agreeFinsh'}>
                <button className="register" type="submit">
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

export default ColaboAgreement;
