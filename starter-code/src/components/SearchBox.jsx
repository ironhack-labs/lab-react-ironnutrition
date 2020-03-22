import React from "react";

const SearchBox = ({ setSearchFilter, searchFilter }) => {
  return (
    <div className="field has-addons">
      <div className="control">
        <input className="input" type="text" placeholder="Find food" value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
      </div>
    </div>
  );
};

export default SearchBox;
