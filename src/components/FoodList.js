import React from 'react';
import FoodBox from './FoodBox';

function FoodList({ foods }) {
  return (
    <div className="container">
      <h1>Food List</h1>
      {foods.map((food) => (
        <FoodBox key={food.name} food={food} />
      ))}
    </div>
  );
}

export default FoodList;
