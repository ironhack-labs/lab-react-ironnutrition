import React from 'react';

const SearchBar = ({searchFood,name}) =>(
    <div>
        <input onChange={searchFood} type="text" className="input search-bar" name="name" placeholder="Search" />
      </div>
);

export default SearchBar;