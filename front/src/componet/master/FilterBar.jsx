import React, { useState } from 'react';
import '../../design/AgreeMasterList.css';

const FilterBar = ({}) => {
  const [Box, setBox] = useState('');

  console.log(Box);
  const handleFilterChange = (e) => {
    setBox(e.target.value);
  };
  return (
    <div className="filterBar">
      <select onChange={handleFilterChange}>
        <option value="신규">신규 접수</option>
        <option value="재협의">재협의</option>
        <option value="진행중">진행중</option>
        <option value="완료">승인 완료</option>
        <option value="전체">전체</option>
      </select>
    </div>
  );
};

export default FilterBar;
