import { useState } from 'react';
import foodsDataJSON from '..//foods.json';
import FoodCard from './FoodCard';
import React from 'react';

function FoodList() {
  const [foods, setFoods] = useState(foodsDataJSON);

  return (
    <div>
      <h1>Food List</h1>
      <div className="FoodList">
        {foods.map((food) => {
          return <FoodCard key={food._id} food={food} />;
        })}
      </div>
    </div>
  );
}

export default FoodList;
