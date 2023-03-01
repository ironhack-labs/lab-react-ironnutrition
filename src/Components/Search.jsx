import React, {useState} from 'react'
import { Divider, Input } from 'antd';

function Search({ searchFoods }) {
    const [search, setSearch] = useState('');
  
    const handleSearch = (e) => {
      setSearch(e.target.value);
      searchFoods(e.target.value);
    };
    return (
      <div>
        <Divider>Search</Divider>
        <label htmlFor="search">Search:</label>
        <Input type="text" name="search" value={search} onChange={handleSearch} />
      </div>
    );
  }

export default Search