import React from 'react';

function SearchBar(props) {
  return (
    <div>
        <input onChange={(e) => props.handleSearch(e.target.value)} type="search" className="input search-bar" name="search" placeholder="Search" value={props.searchInputValue} />
    </div>
  );
}

export default SearchBar;