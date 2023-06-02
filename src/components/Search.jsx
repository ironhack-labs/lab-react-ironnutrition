import React from 'react';
import { useState } from 'react';
import { Input } from 'antd';

function Search(props) {
  const { food } = props;
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
  if (searchInput.length > 0) {
    food.filter((food) => {
      return food.name.match(searchInput);
    });
  }

  return (
    <div>
      <h3>Search</h3>
      <Input
        style={{ width: 400 }}
        type="text"
        value={searchInput}
        placeholder="Enter search..."
        onChange={handleChange}
      ></Input>
    </div>
  );
}

export default Search;
