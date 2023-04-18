import React from 'react';
import { Input } from 'antd';

const SearchBar = ({ setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <label>Search</label>
      <Input type="text" name="search" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
