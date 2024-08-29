import React, { useState } from 'react';
import '../../design/AgreeMasterList.css';

const FilterBar = ({ setFilter }) => {
  const [Box, setBox] = useState('');

  const handleFilterChange = (e) => {
    setBox(e.target.value);
  };
  return (
    <div className="filterBar">
      <select onChange={handleFilterChange}>
        <option value="신규 접수">신규 접수</option>
        <option value="재협의">재협의</option>
        <option value="승인 완료">승인 완료</option>
        <option value="전체">전체</option>
      </select>
    </div>
  );
};

export default FilterBar;
