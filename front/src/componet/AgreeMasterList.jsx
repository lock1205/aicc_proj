import React, { useState, useEffect } from 'react';
import FilterBar from './master/FilterBar';
import SearchBar from './master/SearchBar';
import List from './master/List';
import '../design/AgreeMasterList.css';
import { fetchGetTasksData } from '../redux/slice/apiSlice';
const AgreeMasterList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('전체');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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

  useEffect(() => {
    let filteredList = data;

    // if (filter !== '전체') {
    //   filteredList = filteredList.filter((item) => item.status === filter);
    // }

    // if (searchQuery) {
    //   filteredList = filteredList.filter(
    //     (item) =>
    //       item.TITLE.inludes(searchQuery) ||
    //       item.COMPANY_NAME.includes(searchQuery)
    //   );
    // }
    setFilteredData(filteredList);
  }, [searchQuery, filter, data]);

  return (
    <div className="aml_container">
      <SearchBar setSearchQuery={searchQuery} />
      <FilterBar setFilter={filter} />
      <List data={filteredData} />
    </div>
  );
};

export default AgreeMasterList;
