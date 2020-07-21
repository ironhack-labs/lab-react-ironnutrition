import React from 'react';

const Search = (props) => {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="text"
          name="searchQuery"
          placeholder="Search food..."
          onChange={props.handleChange}
          value={props.searchParam}
        />
      </div>
    </div>
  );
};

export default Search;
