import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      MainPage
      <header class="header">
        <div class="contanier">
          <div class="nav-wrapper">
            <ul class="nav-lists">
              <li>
                <a href="#">회사 이름</a>
              </li>
              <li>
                <a href="#">회사 로고</a>
              </li>
              <Link to={'/login'}>
                <button> 로그인</button>
              </Link>
              <Link to={'/colabo'}>
                <button>협의서 작성</button>
              </Link>
              <Link to={'/agreeFinsh'}>
                <button> 협의서 작성 완료</button>
              </Link>
              <Link to={'/agreeMaterList'}>
                <button> 괸라자 협의서 리스트</button>
              </Link>
              <button>My Page</button>
            </ul>
          </div>
        </div>
      </header>
      <body>
        <div>기술 소개 부분입니다.</div>

        <div>추천 패키지 부분입니다.</div>

        <div>협의서 작성 부분입니다.</div>
      </body>
      <footer>
        <p>Copyright © 2018 tcpschool.co.,Ltd. All rights reserved.</p>
        <address>Contact webmaster for more information. 070-1234-5678</address>
      </footer>
    </div>
  );
};

export default MainPage;
