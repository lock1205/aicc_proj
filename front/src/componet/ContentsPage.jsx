import React from 'react';
import { Link } from 'react-router-dom';

const ContentsPage = () => {
  return (
    <div>
      <div className="MP_category">
        <div className="MP_contents">기술 소개 부분입니다.</div>

        <div className="MP_contents">추천 패키지 부분입니다.</div>
        <Link to={'/colabo'}>
          <div className="MP_contents">협의서 작성</div>
        </Link>
      </div>
    </div>
  );
};

export default ContentsPage;
