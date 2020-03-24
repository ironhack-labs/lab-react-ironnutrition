import React from 'react';

export const SearchBar = ({ searchFood }) => (
  <input
    className="input is-primary search-bar"
    placeholder="Search food..."
    onChange={searchFood}
  />
);
