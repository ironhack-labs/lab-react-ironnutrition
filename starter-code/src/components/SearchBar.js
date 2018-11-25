import React from 'react';

const SearchBar = ({onchange}) => (
    <input type="text" name="search" placeholder="Search" onChange={onchange}></input>
);

export default SearchBar