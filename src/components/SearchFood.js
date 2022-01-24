import React, { useState } from 'react';

const SearchFood = ({ searchedFood }) => {
  
  const [keyword, setKeyword] = useState('')

  const handleChange = (e) => {
    setKeyword(e.target.value)
    searchedFood(e.target.value)
  }

  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search food..."
        value={keyword}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default SearchFood;
