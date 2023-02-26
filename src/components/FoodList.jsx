import { useState } from 'react';
import foodsDataJSON from '..//foods.json';
import FoodCard from './FoodCard';
import React from 'react';
import AddFood from './AddFood';

function FoodList() {
  const [foods, setFoods] = useState(foodsDataJSON);

  const addNewFood = (food) => {
    const updatedFoods = [...foods, food];

    setFoods(updatedFoods);
  };
  return (
    <div>
      <h1>Food List</h1>
      <div className="FoodList">
        <AddFood addFood={addNewFood} />
        {foods
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((food) => {
            return <FoodCard key={food._id} food={food} />;
          })}
      </div>
    </div>
  );
}

export default FoodList;
