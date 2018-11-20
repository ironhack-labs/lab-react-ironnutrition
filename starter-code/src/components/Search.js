import React from "react";

const Search = ({ searchChange, search }) => (
  <div className="field has-addons">
    <div className="control is-expanded">
      <input className="input" type="text" value={search} onChange={searchChange} name="name" placeholder="Search by Name" />
    </div>
    <div className="control">
      <a className="button is-static">Search</a>
    </div>
  </div>
);

export default Search;
