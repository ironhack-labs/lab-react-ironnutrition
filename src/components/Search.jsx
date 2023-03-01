import React, { useState } from 'react';
import { Card, Col, Button, Input } from 'antd';

function Search({ searchFood }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchFood(e.target.value);
  };
  return (
    <div>
      <h2>Search For Food</h2>
      <label htmlFor="search">Search:</label>
      <Input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  );
}

export default Search;
