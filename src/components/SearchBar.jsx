import React, { useState } from 'react';

function SearchBar({ searchWord, setSearch }) {
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchWord}
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
