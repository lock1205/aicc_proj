import React from 'react';
import '../../design/AgreeMasterList.css';

const FilterBar = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="filterBar">
      <select onChange={handleFilterChange}>
        <option value="전체"></option>
        <option value="신규 접수"></option>
        <option value="재협의"></option>
        <option value="승인 완료"></option>
      </select>
    </div>
  );
};

export default FilterBar;
