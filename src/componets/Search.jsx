import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const {searchResults} = props;
    const [query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
        searchResults(e.target.value);
    };

  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor='search'>Search</label>
      <Input value={query} name="search" type="text" onChange={handleQuery} /> 
    </>
  );
}

export default Search;
