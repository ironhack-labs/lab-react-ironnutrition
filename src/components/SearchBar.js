import React from 'react';

function SearchBar(props) {
  return (
    <div>
        <input onChange={(e) => props.filterFood(e.target.value)} type="search" className="input search-bar" name="search" placeholder="Search" />
    </div>
  );
}

export default SearchBar;