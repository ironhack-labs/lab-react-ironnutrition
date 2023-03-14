import Food from '../../foods.json';
import { AddFoodForm } from '../../components/AddFoodForm';
import { useState } from 'react';
import './index.css';
import { Search } from '../../components/Search';

export const Home = () => {
  const [foodJSON, setFoodJSON] = useState(Food);
  const createFood = (newFood) => {
    setFoodJSON([newFood, ...Food]);
  };

  return (
    <div>
      <h1>Add Food Entry</h1>

      <AddFoodForm createFood={createFood} />

      <Search foodJSON={foodJSON} />
    </div>
  );
};
