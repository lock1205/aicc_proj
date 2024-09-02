import React, { useState, useEffect } from 'react';
import FilterBar from './master/FilterBar';
import SearchBar from './master/SearchBar';
import List from './master/List';
import '../design/AgreeMasterList.css';
import { fetchGetTasksData } from '../redux/slice/apiSlice';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import DetailAgree from './public/DetailAgree';
const AgreeMasterList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('전체');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const isOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/get_tasks');
        const result = await response.json();
        console.log(result);
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //아래부분은 현재 필요한 부분이 아니라서 잠시 주석처리
  // useEffect(() => {
  //   let filteredList = data;

  //   // if (filter !== '전체') {
  //   //   filteredList = filteredList.filter((item) => item.status === filter);
  //   // }

  //   // if (searchQuery) {
  //   //   filteredList = filteredList.filter(
  //   //     (item) =>
  //   //       item.TITLE.inludes(searchQuery) ||
  //   //       item.COMPANY_NAME.includes(searchQuery)
  //   //   );
  //   // }
  //   setFilteredData(filteredList);
  // }, [searchQuery, filter, data]);

  return (
    <div className="bg">
      <NavBar />
      <div className="aml_container">
        <h2>Agreement Admin</h2>
        <h3>쉽고 간편하게 의뢰받은 협의서를 관리하세요!</h3>
        {isOpen && <DetailAgree />}
        <div className="aml_FilSea">
          <SearchBar setSearchQuery={searchQuery} />
          <FilterBar setFilter={filter} />
        </div>
        <div className="aml_title_container">
          <div className="aml_title">
            <p>진행 상태</p>
            <p>타이틀</p>
            <p>회사</p>
            <p>희망 마감 날짜</p>
          </div>
        </div>
        {data?.map((item, idx) => (
          <List key={idx} task={item} />
        ))}
      </div>
    </div>
  );
};

export default AgreeMasterList;
