import React from 'react';

const Search = (props) => {
  return (
    <div className="control">
      <input
        className="input"
        type="text"
        placeholder="Search"
        onChange={props.handleSearch}
      />
    </div>
  );
};

export default Search;
