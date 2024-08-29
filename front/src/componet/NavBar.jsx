import React from 'react';
import { Link } from 'react-router-dom';
import '../design/MainPage.css';

const NavBar = () => {
  return (
    <nav className="NAV">
      <div className="left">
        <Link to={'/techInfo'}>
          <button className="main-tech">기술 소개</button>
        </Link>
        <Link to={'/recommend'}>
          <button className="main-pack">패키지</button>
        </Link>
      </div>
      <button className="main-logo">
        <i class="fi fi-brands-wepik"></i>
        <span>AICO</span>
      </button>
      <div className="right">
        <button className="Home">MY HOME</button>
        <Link to={'/login'}>
          <button>LOGIN</button>
        </Link>
        <Link className="main-agree" to={'/colabo'}>
          <button>외뢰하기</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
