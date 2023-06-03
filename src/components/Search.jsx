import React from 'react';
import { useState } from 'react';
import { Input } from 'antd';

function Search(props) {
  const { food, filterFoods } = props;
  const [searchInput, setSearchInput] = useState('');
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    filterFoods(searchInput);
  };
  return (
    <div>
      <h3>Search</h3>
      <Input
        style={{ width: 400 }}
        type="text"
        placeholder="Enter search..."
        value={searchInput}
        onChange={handleSearchInput}
      ></Input>
    </div>
  );
}

export default Search;
