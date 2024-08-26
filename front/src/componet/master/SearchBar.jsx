import React from 'react';
import '../../design/AgreeMasterList.css';

const SearchBar = ({ setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="회사 또는 협의서 이름으로 검색하세요"
        onChange={handleInputChange}
      />
      <button>검색</button>
    </div>
  );
};

export default SearchBar;
