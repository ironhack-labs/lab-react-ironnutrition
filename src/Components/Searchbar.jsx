import React, { useState } from 'react';

function Searchbar(props) {
    
    const {searchFood} = props;
  const [ search, setSearch ] = useState('');
    
  //handler function[]

  const handlerSearch = (e) => {
    setSearch(e.target.value);
    searchFood(e.target.value);
  };

  return (
    <div>
      <h2>Search foods</h2>

      <label htmlFor="search">Search:</label>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handlerSearch}
      />
    </div>
  );
}

export default Searchbar;
