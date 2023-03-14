import React from 'react';


const Search = ({ onChange, search }) => {
  return (
    <div className="SearchBar">
      <h3>Search</h3>
      <input
          name="search"
          onChange={onChange}
          value={search}
          className="searchbar form-control mb-4 text-center" type="search"
          placeholder="Search" aria-label="Search"
      />
    </div>
  );
};

export default Search;