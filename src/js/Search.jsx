import React, { Component } from 'react';

const Search = props => {
  return (
    <form className="search" onSubmit={props.searchFoods}>
      <input
        value={props.search}
        onChange={props.handleSearchChange}
        type="text"
        placeholder="name"
      />
      <input type="submit" value="Search" />
    </form>
  )
}

export default Search;