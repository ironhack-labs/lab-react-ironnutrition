import React from 'react';
import FoodItem from './FoodItem';

const FoodList = ({ foodItems, onAdd}) => {
  return (
    <>
      {foodItems.map((item) => {
        return (
          <FoodItem key={item.uuid} {...item} onAdd={onAdd}></FoodItem>
        );
      })}
    </>
  );
};

export default FoodList;
