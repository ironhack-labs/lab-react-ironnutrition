import React from 'react';

const Search = ({ search, handleSearch }) => {
  return (
    <div>
      <input
        className="input mb-5"
        onChange={(event) => handleSearch(event.target.value)}
        type="text"
        name="search"
        value={search}
      />
    </div>
  );
};

export default Search;
