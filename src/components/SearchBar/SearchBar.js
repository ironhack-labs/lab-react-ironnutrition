import React, { useState } from 'react';

const SearchBar = ({ filterFoods }) => {
  const [input, setInput] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setInput(value);    
    filterFoods(value);    
  };

  return (
    <div>
        <input
          type="text"
          name="input"
          placeholder="Search by food name"
          value={input}
          onChange={handleChange}
        />
    </div>    
  );
};

export default SearchBar;
