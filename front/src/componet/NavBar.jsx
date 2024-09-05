import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../design/MainPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slice/authSlice';
import { tempComplete } from '../redux/slice/tempSlice';

const NavBar = () => {
  const temptask = useSelector((state) => state.temp.temptask);
  const authData = useSelector((state) => state.auth.authData);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const tempLoad = () => {
    if (authData?.user_key === temptask?.key) {
      const confirm = window.confirm(
        '임시저장된 협의서가 있습니다. 불러오겠습니까?'
      );
      if (!confirm) {
        dispatch(tempComplete());
      }
    }
    navigator('/colabo');
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
          <button onClick={tempLoad}>의뢰하기</button>
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
