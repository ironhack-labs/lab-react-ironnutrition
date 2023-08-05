import React, {useState} from 'react';
import { Divider, Input } from 'antd';

function Search({onSearch}) {
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        onSearch(newSearch);
    }

  return (
    <>
      <Divider>Search</Divider>
      <Input placeholder="Search for food..." value={search} onChange={handleSearch} />
    </>
  );
}

export default Search;