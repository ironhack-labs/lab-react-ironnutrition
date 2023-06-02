import React from 'react';
import { useState } from 'react';
import {  Input } from 'antd';

function Search(props) {
  const { food } = props;
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    food.filter((food) => {
      return food.name.match(searchInput);
    });
  }

  return (
    <div>
      <h3>Search</h3>
      <label>Search:</label>
      <Input
        type="text"
        value={searchInput}
        placeholder="Enter search query"
        onChange={handleChange}
      ></Input>
    </div>
  );
}

export default Search;
