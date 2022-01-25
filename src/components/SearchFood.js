import React, { useState } from 'react';

const SearchFood = ({ searchedFood }) => {
  
  const [keyword, setKeyword] = useState('')

  const handleChange = (e) => {
    searchedFood(e.target.value)
    setKeyword(e.target.value)
  }

  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search food..."
        value={keyword}
        onChange={(e) => handleChange(e)}
      ></input>
    </>
  );
};

export default SearchFood;
