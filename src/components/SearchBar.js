import React from 'react';
import './SearchBar.css';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="food-searchbar">
      <h1>Iron Nutrition</h1>
      <input
        className="input is-small"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
