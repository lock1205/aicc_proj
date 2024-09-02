import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchPostTasksData } from '../redux/slice/apiSlice';
import { features } from '../ai_info/data';
import { Link, useNavigate } from 'react-router-dom';

import NavBar from './NavBar';

const ColaboAgreement = () => {
  const navigator = useNavigate();

  const [formData, setFormData] = useState({
    key: '',
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
    status: '신규', //현재 협의서 상태를 리덕스 case문으로 넣는다
  });

  const dispatch = useDispatch();

  const authData = useSelector((state) => state.auth.authData);

  const handleChange = (e) => {
    //const { name, value } = e.target;
    formData.key = authData.user_key;
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      await dispatch(fetchPostTasksData(formData)).unwrap();
      navigator('/agreeFinsh');
    } catch (error) {
      console.error('Error adding task:', error);
      toast.error('협의서 등록 실패');
    }
  };

  return (
    <div className="bg">
      <NavBar />
      <div className="Agree-wrapper">
        <div className="Agree-content">
          <div className="Agree-title">
            <h1>협의서 작성하기</h1>
            <h2>[AICO]나만의 AI솔루션 제작 요청</h2>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="Agree-base">
              <h3>협의서 개요</h3>
              <div className="Agree-id ">
                <p>
                  제목 <span>(필수)</span>
                  {/*<h4 className="text-red-600">*필수 입력 사항*</h4> */}
                </p>

                <input
                  className=""
                  type="text"
                  name="title"
                  id=""
                  onChange={handleChange}
                  value={formData.title}
                ></input>
              </div>
              <div className="Agree-decription">
                <p>요구사항</p>
                <textarea
                  className=""
                  name="description"
                  id=""
                  onChange={handleChange}
                  value={formData.description}
                ></textarea>
              </div>
              <div className="Agree-myInfo">
                <h3>기본 정보</h3>

                <div className="Agree-company_name">
                  <p>
                    회사명 <span>(필수)</span>
                  </p>
                  <input
                    className=""
                    name="company_name"
                    id=""
                    onChange={handleChange}
                    value={formData.company_name}
                  ></input>
                </div>
                <div className="Agree-level">
                  <p>
                    직책<span>(필수)</span>
                  </p>
                  <input
                    className=""
                    name="level"
                    id=""
                    onChange={handleChange}
                    value={formData.level}
                  ></input>
                </div>
                <div className="Agree-master_name">
                  <p>
                    총괄자명<span>(필수)</span>
                  </p>
                  <input
                    className=""
                    name="master_name"
                    id=""
                    onChange={handleChange}
                    value={formData.master_name}
                  ></input>
                </div>
                <div className="Agree-master_tel">
                  <p>
                    연락처<span>(필수)</span>
                  </p>
                  <input
                    className=""
                    name="master_tel"
                    id=""
                    onChange={handleChange}
                    value={formData.master_tel}
                    placeholder="01012345678"
                  ></input>
                </div>
              </div>
            </div>
            <div className="Agree-hope">
              <h3>사전 요구 사항</h3>

              <div className="Agree-end_date">
                <p>
                  희망마감기한<span>(필수)</span>
                </p>
                <input
                  className=""
                  name="end_date"
                  id=""
                  onChange={handleChange}
                  value={formData.end_date}
                ></input>
              </div>
              <div className="Agree-sum_money">
                <p>
                  예상예산<span>(필수)</span>
                </p>
                <input
                  className=""
                  name="sum_money"
                  id=""
                  onChange={handleChange}
                  value={formData.sum_money}
                ></input>
              </div>
            </div>
            <div className="Agree-need_tech">
              <h3>희망 기술</h3>
              <div className="Agree-ai_data">
                <p>AI데이터기술</p>
                <select name="ai_data" class="select" onChange={handleChange}>
                  <option key={''}>선택하세요</option>
                  {features.map(
                    (option, idx) =>
                      option.Major === 'AI_Data' && (
                        <option key={idx}>{option.title}</option>
                      )
                  )}
                </select>
              </div>
              <div className="Agree-ai_media">
                <p>AI미디어기술</p>
                <select name="ai_media" class="select" onChange={handleChange}>
                  <option key={''}>선택하세요</option>
                  {features.map(
                    (option, idx) =>
                      option.Major === 'AI_Media' && (
                        <option key={idx}>{option.title}</option>
                      )
                  )}
                </select>
              </div>
              <div className="Agree-ai_image">
                <p>AI이미지기술</p>
                <select name="ai_image" class="select" onChange={handleChange}>
                  <option key={''}>선택하세요</option>
                  {features.map(
                    (option, idx) =>
                      option.Major === 'AI_Image' && (
                        <option key={idx}>{option.title}</option>
                      )
                  )}
                </select>
              </div>
              <div className="Agree-ai_lang">
                <p>AI생성을 위한 프로그래밍 언어</p>
                <select name="ai_lang" class="select" onChange={handleChange}>
                  <option key={''}>선택하세요</option>
                  {features.map(
                    (option, idx) =>
                      option.Major === 'AI_Lang' && (
                        <option key={idx}>{option.title}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <div className="Agree-buttonBox">
              <button className="Agree-register" type="submit">
                제출하기
              </button>
              <div className="Agree-submit_tip">
                제출 과정에서 문제가 발생하였다면 1577-2020으로 문의주세요!
                <p>
                  협의서 관리 솔루션 그리팅(Greeting)의 고객센터로 연결됩니다.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ColaboAgreement;
