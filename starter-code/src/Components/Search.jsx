import React from "react";

const Search = ({ handleSearch }) => (
  <input
    onChange={handleSearch}
    type="text"
    placeholder="Search for your food"
  />
);

export default Search;
