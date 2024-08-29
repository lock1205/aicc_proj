import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
const NavBar = () => {
  return (
    <nav>
      <div>
        <button>
          <span>님 Logout</span>
        </button>
      </div>
      <div>
        <button>
          <MdHome />
        </button>
      </div>
      <div>
        <Link to={'/agreeMasterList'}>
          <button> 관리자 협의서 리스트</button>
        </Link>
      </div>
      <div>
        <Link to={'/login'}>
          <button> 로그인</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
