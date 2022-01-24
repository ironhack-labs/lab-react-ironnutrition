import React from 'react';
import FoodCard from './FoodCard';

const FoodBox = ({ foods, addTodayFood }) => {
  return (
    <div>
      {foods.map((food) => (<FoodCard key={food.name} {...food} addTodayFood={addTodayFood} />))}
    </div>
  )
};

export default FoodBox;
