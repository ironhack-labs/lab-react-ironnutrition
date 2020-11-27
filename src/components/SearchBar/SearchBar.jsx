import React from 'react';

const SearchBar = (props) => {
  return (
    <input
      value={props.searchValue}
      onChange={(e) => props.setSearchValue(e.target.value)}
    ></input>
  );
};

export default SearchBar;
