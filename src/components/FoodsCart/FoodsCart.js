import React from 'react';

const FoodsCart = ({ foodsInfo }) => {
  // console.log(foodsInfo);

  const displayInfo = () => {
    return foodsInfo.map(foodInfo => (
      <li>{foodInfo.quantity} {foodInfo.name} = {foodInfo.quantity * foodInfo.calories} cal</li>
    ));
  }

  const displayTotalCalories = () => {
    return foodsInfo.reduce((acc, foodInfo) => {
      return acc + (+foodInfo.quantity * foodInfo.calories);
    }, 0);
  }

  return (
    <>
      <h2>Today's Foods</h2>

      <ul>
        {displayInfo()}
      </ul>

      <p>TOTAL: {displayTotalCalories()} cal</p>
    </>
  );
}

export default FoodsCart;