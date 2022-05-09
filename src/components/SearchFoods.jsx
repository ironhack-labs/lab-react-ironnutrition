import React, { useState } from 'react';

const SearchFoods = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    props.handleSearch(e.target.value)
  };

  return (
    <div>
      <label htmlFor="">Search Foods</label>
      <input type="text" value={searchTerm} onChange={handleSearch} />
    </div>
  );
};

export default SearchFoods;
