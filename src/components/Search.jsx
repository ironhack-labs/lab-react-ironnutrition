import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({searchFood}) {
    const [search, setSearch] = useState('')

    const handleSearch = e => {
        setSearch(e.target.value);
        searchFood(e.target.value);
    }
  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor='search'>Search</label>
      <Input name='search' value={search} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;