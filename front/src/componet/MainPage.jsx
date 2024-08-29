import React from 'react';
import NavBar from './NavBar';
import ContentsPage from './ContentsPage';
import '../design/MainPage.css';

const MainPage = () => {
  return (
    <div className="Main-BG">
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="Main-text">
        <h1>
          가장 신뢰 받는 인공 지능(AI) 솔루션으로 인간과 기업의 생산성을
          높입니다.
        </h1>
      </div>
      <div className="ContentsPage">
        <ContentsPage />
      </div>
    </div>
  );
};

export default MainPage;
