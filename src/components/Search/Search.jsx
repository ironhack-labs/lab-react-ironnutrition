import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({filterFood}) {
  const [query, setQuery] = useState('');
  
  const handleQuery = event => {
    const value = event.target.value;
    setQuery(value);
    filterFood(value);
  };
  
  return (
    <>
      <Divider>Search</Divider>
      <Input value={query} type="searchbar" onChange={handleQuery} />
    </>
  );
}

export default Search;