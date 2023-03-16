import React from 'react';
import FoodCard from '../FoodCard';
import './index.css'

const FoodList = ({ foods }) => {
  return (
    <div className='FoodList'>
      {foods.map(food => {
        return <FoodCard food={food} key={food.name} />
      })}
    </div>
  );
};

export default FoodList;