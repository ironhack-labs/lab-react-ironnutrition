import React from "react";

const Search = ({ textSearch }) => (
  <div className="field">
    <div className="control">
      <input
        type="text"
        className="input"
        placeholder="Search"
        onChange={textSearch}
      />
    </div>
  </div>
);

export default Search;
