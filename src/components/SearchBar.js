import React from 'react';
import { Divider, Input } from 'antd';

function SearchBar({ searchInput, setSearchInput }) {
  console.log(searchInput);
  return (
    <form>
      <Divider> Search</Divider>
      <label>Search</label>
      <Input
        value={searchInput}
        type="text"
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      ></Input>
    </form>
  );
}

export default SearchBar;
