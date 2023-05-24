import React, { useState } from 'react';
import { Input } from 'antd';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Input
      placeholder="Search Food"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default Search;
