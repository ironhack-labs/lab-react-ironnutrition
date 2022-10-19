import { useState } from 'react';

// Iteration 5
function Search({ callbackToSearch }) {
  return (
    <>
      <label>Search</label>
      <input
        placeholder="Enter search query"
        type="text"
        onChange={(e) => {
          callbackToSearch(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
