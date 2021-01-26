import React from 'react';
import { useState } from 'react';
import { Input, Col } from 'antd';

const { Search } = Input;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);

  return (
    <Col span={12}>
      <Search
        placeholder="Search..."
        loading
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </Col>
  );
};

export default SearchBar;
