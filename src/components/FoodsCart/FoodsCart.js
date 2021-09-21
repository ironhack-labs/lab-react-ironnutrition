import React from 'react';

const FoodsCart = ({ foodsInfo }) => {
  
  const displayCartInfo = () => {
    return foodsInfo.map(foodInfo => (
      <li>{foodInfo.quantity} {foodInfo.name} = {foodInfo.quantity * foodInfo.calories} cal</li>
    ));
  };

  const displayTotalCalories = () => {
    return foodsInfo.reduce((acc, foodInfo) => {
      return acc + (+foodInfo.quantity * foodInfo.calories);
    }, 0);
  }

  return (
    <>
      <h2>Today's foods</h2>

      <ul>
        {displayCartInfo()}
      </ul>

      <p>Total: {displayTotalCalories()} cal</p>
    </>
  );
};

export default FoodsCart;