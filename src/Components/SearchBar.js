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
    <div>
        <Divider>Food List</Divider>
        <label>Search</label>
        <Input type="text" value={query} onChange={handleQuery} />
    </div>
  );
}

export default SearchBar