import React from 'react';
import '../design/AgreeMaterList.css';

const positions = [
  {
    title: '[메이플스토리 월드 & 헬로메이플] 테크니컬 디자이너',
    category: '메이플스토리 월드',
    field: '게임기획',
    type: '경력',
    employment: '정규직',
    deadline: '2024. 09. 02까지',
  },
];
const AgreeMaterList = () => {
  return (
    <div className="positions-container">
      <div className="header">
        <h2>메이플의 다양한 포지션들을 소개합니다!</h2>
        <p>작성해두신 이력서로 간편하게 지원할 수 있습니다!</p>
      </div>
      <input type="text" placeholder="검색" className="search-bar" />
      <div className="filters">
        <select className="filter">구분 (3)</select>
        <select className="filter">직군 (37)</select>
        <select className="filter">경력사항</select>
        <select className="filter">고용형태</select>
      </div>
      <ul className="positions-list">
        {positions.map((position, index) => (
          <li key={index} className="position-item">
            <div className="position-title">{position.title}</div>
            <div className="position-meta">
              {position.category} | {position.field} | {position.type} |{' '}
              {position.employment}
            </div>
            <div className="position-deadline">{position.deadline}</div>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
};

export default AgreeMaterList;
