import React from 'react';
import { Divider, Input } from 'antd';

const SearchBar = ({ search, setSearch }) => {
  console.log(search);
  return (
    <>
      <Divider>Search</Divider>

      <label>Search: </label>
      <Input
        value={search}
        type="text"
        onChange={(event) => {
          setSearch(() => event.target.value);
        }}
        style={{ maxWidth: 500 }}
      />
    </>
  );
};

export default SearchBar;
