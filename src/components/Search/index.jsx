import React, { useState } from 'react';
import { FoodBox } from '../FoodBox';
import "./index.css"

export const Search = ({ foodJSON }) => {
  const [query, setQuery] = useState('');
  const handleQueryChange = ({ target }) => {
    setQuery(target.value);
  };

  const foodToDisplay = foodJSON.filter((food) => 
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='Search'>
      <form>
      <label>Search</label>
        <input
          placeholder="Search"
          type="search"
          value={query}
          onChange={handleQueryChange}
        />
      </form>
      <div className='SearchList'>
      {foodToDisplay.map((food) => {
        return (
          <div className='' key={food.name}>
            <FoodBox food={food} />
          </div>
        );
      })}
      </div>
    </div>
  );
};
