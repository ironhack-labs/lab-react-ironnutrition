import React from 'react';

const FoodList = ({ food }) => {
  return (
    <div>
      <p>{food.name}</p>
      <img src={food.image} alt="food-img" style={{ height: 90 }} />
    </div>
  );
};

export default FoodList;
