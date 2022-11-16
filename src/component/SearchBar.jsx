import React, { useState } from 'react'
import { Divider, Input } from 'antd';

function SearchBar({filterFood}) {
    const [query, setQuery] = useState('')

    const handleQuery = (e) => {
        setQuery(e.target.value);
        filterFood(e.target.value);
      };

      
  return (
    <div>
        <Divider>Search</Divider>
        <label>Search</label>
        <input value={query} type="text" onChange={handleQuery} />
    </div>
  )
}

export default SearchBar