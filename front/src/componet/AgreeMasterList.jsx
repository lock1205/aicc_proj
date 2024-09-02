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
const AgreeMasterList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ status: '전체' });
  const [data, setData] = useState([]);

  const isOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/get_tasks');
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    axios
      .post('http://localhost:8080/post_status', filter)
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
  }, [filter]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/get_searchTasks/${searchQuery}`)
      .then((res) => {
        if (res.status === 201) {
          setData(res.data);
          console.log(res.data);
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
        {isOpen && <DetailAgree />}
        <SearchBar props={setSearchQuery} />
        <FilterBar Comeinfunc={testfunction} />
        {data?.map((item, idx) => (
          <List key={idx} task={item} />
        ))}
      </div>
    </div>
  );
};

export default AgreeMasterList;
