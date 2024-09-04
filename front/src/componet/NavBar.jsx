import React from 'react';
import { Link } from 'react-router-dom';
import '../design/MainPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slice/authSlice';

const NavBar = () => {
  const authData = useSelector((state) => state.auth.authData);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
        <Link to="/">
          <i class="fi fi-brands-wepik"></i>
          <span>AICO</span>
        </Link>
      </button>

      <div className="right">
        {authData && authData.email === 'admin@admin' ? (
          <Link to={'/agreeMasterList'}>
            <button className="main-pack">관리자 페이지</button>
          </Link>
        ) : authData ? (
          <Link to={'/mypage'}>
            <button className="Home">MY HOME</button>
          </Link>
        ) : (
          ''
        )}
        {authData ? (
          <button onClick={handleLogout}>LOGOUT</button>
        ) : (
          <Link to={'/login'}>
            <button> LOGIN</button>
          </Link>
        )}
        {authData ? (
          <Link className="main-agree" to={'/colabo'}>
            <button>의뢰하기</button>
          </Link>
        ) : (
          <Link to={'/login'}>
            <button>의뢰하기</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
