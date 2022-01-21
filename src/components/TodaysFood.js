import React, { Fragment } from 'react';

const TodaysFood = ({ foods }) => {
  const todaysFoodsList = foods.map((food) => (
    <li key={food.name}>
      <h3>{food.name}</h3>
      <p>{food.calories}</p>
      <p>{food.quantity}</p>
    </li>
  ));
  let totalCalories;
  if (foods.length) {
    totalCalories = foods.reduce(
      (acc, el) => acc + el.quantity * el.calories,
      0
    );
  } else {
    totalCalories = 0;
  }
  console.log(totalCalories);
  return (
    <Fragment>
      <h1>Today's Foods</h1>
      <ul>{todaysFoodsList}</ul>
      <p>Total calories: {totalCalories}</p>
    </Fragment>
  );
};

export default TodaysFood;
