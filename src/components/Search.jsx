import { Input } from 'antd';
import React, { useState } from 'react';

function Search({ searchFood }) {
  const [search, setSearch] = useState('');

  return (
    <div className="search">
      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
          searchFood(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
