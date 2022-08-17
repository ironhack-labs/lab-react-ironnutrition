import { Input } from 'antd';
import { useState } from 'react';

function SearchBar(props) {
  const { searchResults } = props;
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
    searchResults(e.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search</label>
      <Input value={query} name="search" type="text" onChange={handleQuery} />
    </div>
  );
}

export default SearchBar;
