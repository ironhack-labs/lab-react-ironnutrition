import React from "react";


const Search = props => {
  return (
    <input value={props.search} onChange={props.handleSearchChange} type="text" placeholder="name"/>
  );
};

export default Search;