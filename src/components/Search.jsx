import React from 'react';
import { Divider, Input } from 'antd';

function Search({ input, setInput }) {
  const handleSearch = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={input} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
