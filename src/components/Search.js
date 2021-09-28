import React from 'react';

const Search = ({ getSearchQuery }) => {
  return (
    <div>
      <span>Search for Foods:</span>
      <input type="text" onChange={(e) => getSearchQuery(e.target.value)} />
    </div>
  );
};

export default Search;
