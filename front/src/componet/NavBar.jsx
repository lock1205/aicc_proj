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
      <Link to="/">
        <button className="main-logo">
          <i class="fi fi-brands-wepik"></i>
          <span>A I C O</span>
        </button>
      </Link>
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
        <div className="NAV-login">
          {authData ? (
            <button onClick={handleLogout}>LOGOUT</button>
          ) : (
            <Link to={'/login'}>
              <button> LOGIN</button>
            </Link>
          )}
        </div>
        {authData ? (
          <Link className="main-agree" to={'/colabo'}>
            <button>의뢰하기</button>
          </Link>
        ) : (
          <Link className="main-agree" to={'/login'}>
            <button>의뢰하기</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
