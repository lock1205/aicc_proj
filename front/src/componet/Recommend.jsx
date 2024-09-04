import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import '../design/Recommend.css';
import { Link } from 'react-router-dom';

const Recommend = () => {
  const [categories, setCategories] = useState([]);

  // 데이터를 가져오는 비동기 함수
  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8080/get_Category/:text'); // API 호출
      const data = await response.json();

      // console.log(data);

      setCategories(data); // 받아온 데이터를 상태로 설정
    } catch (error) {
      console.log('Error fetching categories', error); //
    }
  };

  // 컴포넌트가 처음 렌더링될 때 한 번만 데이터 가져오기
  useEffect(() => {
    fetchCategories();
  }, []); // 의존성 배열을 빈 배열로 설정하여 무한 루프 방지

  return (
    <div className="bg">
      <NavBar />
      <div className="R-container">
        {categories.map((category, index) => (
          <div key={index} className="R-packages">
            <div className="R-title">{category.package_name}</div>

            <div className="R-catecory">
              <span>#{category.ai_data}</span>
              <span>#{category.ai_media}</span>
              <span>#{category.ai_lang}</span>
              <span>#{category.ai_image}</span>
            </div>
            <div className="R-des">{category.package_desc}</div>
            <div className="R-like">
              <Link to="/colabo">
                <button>나만의 솔루션 의뢰하기</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
