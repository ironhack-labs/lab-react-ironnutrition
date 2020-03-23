import React from 'react';

export const SearchBar = ({ searchFood }) => (
  <input
    className="input is-primary"
    placeholder="Search food..."
    onChange={searchFood}
  />
);
