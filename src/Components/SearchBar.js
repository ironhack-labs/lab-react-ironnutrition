//rfce
import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function SearchBar({ filteredItens }) { 
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
  setQuery(e.target.value);
  filteredItens(e.target.value);
  };

  return (
    <div class='container'>
    <div class='search'>
        <Divider>Search</Divider>
        <label>Search</label>
        <Input type="text" value={query} onChange={handleQuery} />
    </div>
  </div>
  );
}

export default SearchBar