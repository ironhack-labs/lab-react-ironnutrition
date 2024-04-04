import React, { useState } from 'react';
import { Divider, Input } from "antd";

function Search({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value); // Call the passed callback function
  };

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input 
        name="search" 
        value={searchTerm} 
        type="text" 
        onChange={handleChange} 
      />
    </>
  );
}

export default Search;
