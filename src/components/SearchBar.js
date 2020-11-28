import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = (prop) => {
  
  const handleSearch = (event) => {
    let searching = event.target.value
    prop.foodFilter(searching)
  }

  return (
    <div>
      <input className='searchBar' type='text' name='searchBar' placeholder='Search for food here' onChange={handleSearch}></input>
    </div>
  )
};

export default SearchBar;