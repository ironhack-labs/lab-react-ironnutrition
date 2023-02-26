import { useState } from 'react';
import foodsDataJSON from '..//foods.json';
import FoodCard from './FoodCard';
import React from 'react';

function FoodList() {
  const [foods, setFoods] = useState(foodsDataJSON);

  return (
    <div>
      <h2>Food List</h2>

      {foods.map((food) => {
        return <FoodCard key={food._id} food={food} />;
      })}
    </div>
  );
}

export default FoodList;
