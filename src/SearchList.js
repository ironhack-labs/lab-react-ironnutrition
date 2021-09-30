import React from 'react';
import FoodBox from './FoodBox';

function SearchList({ filteredFoods }) {
  const filtered = filteredFoods.map(food =>  <FoodBox key={food.name} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;