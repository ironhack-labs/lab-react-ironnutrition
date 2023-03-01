import React, { useState } from 'react';

function Search({ searchFood }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchFood(e.target.value);
  };
  return (
    <div>
      <h2>Search Food</h2>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  );
}

export default Search;