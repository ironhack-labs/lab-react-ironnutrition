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
      <input type="text" name="search" value={query} onChange={handleQuery} />
    </div>
  );
}

export default SearchBar;
