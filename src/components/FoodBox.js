import React from 'react';
import FoodCard from './FoodCard';

const FoodBox = ({ foods }) => {
  return (
    <div>

      {foods.map((food) => (<FoodCard key={food.name} {...food} />))}
    </div>
  )
};

export default FoodBox;
