import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        size="large"
        value={searchTerm}
        type="text"
        onChange={(evt) => setSearchTerm(evt.target.value)}
      />
    </>
  );
}

export default Search;
