import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input
        type="text"
        className="input search"
        name="Search"
        value={props.value}
        onChange={(event) => props.handleSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
