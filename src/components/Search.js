import React from 'react';
import { Divider, Input } from 'antd';

export default function Search( {searchInput, setSearchInput} ) {

  const handleSearchInput = (e) => {
    const newSearch = e.target.value;
    setSearchInput(newSearch);
  };
  
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={(e) => {handleSearchInput(e)}} />
    </>
  )
}
