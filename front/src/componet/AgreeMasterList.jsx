import React, { useState, useEffect } from 'react';
import FilterBar from './master/FilterBar';
import SearchBar from './master/SearchBar';
import List from './master/List';
import '../design/AgreeMasterList.css';

const AgreeMasterList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('전체');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('YOUR_BACKEND_API_URL'); //backend 링크 바꿔야 함 이건 임시용
        const result = await response.json();
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

    if (filter !== '전체') {
      filteredList = filteredList.filter((item) => item.STATUS === filter);
    }

    if (searchQuery) {
      filteredList = filteredList.filter(
        (item) =>
          item.TITLE.inludes(searchQuery) ||
          item.COMPANY_NAME.includes(searchQuery)
      );
    }

    setFilteredData(filteredList);
  }, [searchQuery, filter, data]);

  return (
    <div className="aml_container">
      <SearchBar setSearchQuery={setSearchQuery} />
      <FilterBar setFilter={setFilter} />
      <List data={filteredData} />
    </div>
  );
};

export default AgreeMasterList;
