import React from 'react';

import NavBar from './NavBar';
import '../design/MainPage.css';
import ContentsPage from './ContentsPage';

const MainPage = () => {
  return (
    <div>
      <div class="MP_container">
        <header>
          <h1>회사로고</h1>
          <div className="MP_nav">
            <NavBar />
          </div>
        </header>
        <div className="MP_main-content">
          <ContentsPage />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
