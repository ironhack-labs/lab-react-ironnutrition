import React from 'react';

export const SearchBar = ({ searchFood }) => (
  <input placeholder="Search food..." onChange={searchFood} />
);
