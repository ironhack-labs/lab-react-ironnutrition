import React from 'react';

const Search = ({searchMethod, search}) => {
  return (
    <input onChange={(e) => searchMethod(e.target.value)} type="text" name="search" placeholder="Search for a food" value={search}/>
    );
}

export default Search;