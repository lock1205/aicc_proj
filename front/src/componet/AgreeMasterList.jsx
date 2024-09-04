import React, { useState, useEffect } from 'react';
import FilterBar from './master/FilterBar';
import SearchBar from './master/SearchBar';
import List from './master/List';
import '../design/AgreeMasterList.css';
import { fetchGetTasksData } from '../redux/slice/apiSlice';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import DetailAgree from './public/DetailAgree';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AgreeMasterList = () => {
  const authData = useSelector((state) => state.auth.authData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ status: '신규' });
  const [data, setData] = useState([]);

  const navigator = useNavigate();

  const isOpen = useSelector((state) => state.modal.isOpen);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/get_tasks');
  //       const result = await response.json();
  //       console.log(result);
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    if (!authData) {
      navigator('/');
      return;
    }
  }, [authData]);

  useEffect(() => {
    axios
      .post('http://localhost:8080/post_status', filter)
      .then((res) => {
        if (res.status === 201) {
          if (filter.status === '') {
            setFilter({ status: '신규' });
          } else {
            setData(res.data);
          }
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }, [filter]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/get_searchTasks/${searchQuery}`)
      .then((res) => {
        if (res.status === 201) {
          setData(res.data);
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }, [searchQuery]);

  const testfunction = (status) => {
    setFilter({ status: status });
  };

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
          <SearchBar props={setSearchQuery} />
          <FilterBar Comeinfunc={testfunction} />
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
