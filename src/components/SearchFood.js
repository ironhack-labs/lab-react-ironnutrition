import React from 'react';

const SearchFood = ({ searchedFoods, search }) => {
  
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => searchedFoods(e.target.value)}
      ></input>
    </>
  );
};

export default SearchFood;
