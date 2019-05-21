import React from 'react';

const Search = ({ handleSearch }) => (
  <>
    <input type="text" placeholder="Search for your favorite food" onChange={handleSearch} />
  </>
);

export default Search;
