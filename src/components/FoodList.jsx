import foodsDataJSON from '../foods.json';
import React from 'react';
import FoodBox from './FoodBox';
import { useState } from 'react';
import AddFood from './AddFood';

const FoodList = () => {
  const [foodsData, setFoodsData] = useState(foodsDataJSON);
  const [foods, setFoods] = useState(foodsDataJSON);

  const addNewFood = (newFood) => {
    const updatedFood = [...foods, newFood];
    const updatedFoodData = [...foodsData, newFood];

    setFoods(updatedFood);
    setFoodsData(updatedFoodData);
  };
  return (
    <div>
      <h2>Food List</h2>
      {foods.map((individualFood) => (
        <FoodBox food={individualFood} />
      ))}
      <AddFood addFood={addNewFood} />
    </div>
  );
};

export default FoodList;
