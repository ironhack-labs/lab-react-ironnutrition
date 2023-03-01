import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function Search({searchFood }) {
  const [search, setSearch] = useState('');
  

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchFood(e.target.value);
  }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
