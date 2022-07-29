import React from 'react';
import { Input } from 'antd';


const Search = ({ handleSearch }) => {
  return <Input placeholder=" search " name="search" onChange={handleSearch} />;
};

export default Search;
