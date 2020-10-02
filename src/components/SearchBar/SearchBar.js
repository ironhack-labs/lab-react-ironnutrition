import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={props.searchBox}
        onChange={props.searchChange}
      />
    </div>
  );
}

export default SearchBar;
