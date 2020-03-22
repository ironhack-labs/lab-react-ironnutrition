import React from "react";
import SearchContainer from "../styles/SearchContrainer";

const SearchBox = ({ setSearchFilter, searchFilter }) => {
  return (
    <p class="control is-expanded">
      <input className="input" type="text" placeholder="Find food" value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
    </p>
  );
};

export default SearchBox;
