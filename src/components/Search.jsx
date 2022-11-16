import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
    const {filterFood}=props
    const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
    filterFood(e.target.value);
  }


  return (
    <>
      <Divider>Search</Divider>


      <Input value={query} type="searchbar" onChange={handleQuery} />
    </>
  );
}

export default Search;