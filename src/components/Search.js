import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function Search({ filterFood }) {
  const [search, setSearch] = useState('');
  // console.log('Search:', search);
  return (
    <div>
      <Divider> Search </Divider>
      <label>Search:</label>
      <Input
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
      />
      {filterFood(search)}
    </div>
  );
}

export default Search;
