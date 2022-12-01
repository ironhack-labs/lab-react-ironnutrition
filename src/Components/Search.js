import React, { useState } from 'react';
import { Divider, Input } from 'antd';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  return (
    <React.Fragment>
      <Divider>Search</Divider>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <label htmlFor="search">Search</label>
        <Input
          id="search"
          value={search}
          onChange={({ target }) => {
            setSearch(target.value);
            onSearch(target.value);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Search;
