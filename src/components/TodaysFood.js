import React from 'react';
import { IoIosTrash } from 'react-icons/io';
import classes from './TodaysFood.module.css';

const TodaysFood = ({ foods, onDelete }) => {
  const todaysFoodsList = foods.map((food) => (
    <li key={food.name}>
      <h3>{food.name}</h3>
      <p>{food.calories}</p>
      <p>{food.quantity}</p>
      <p onClick={() => onDelete(food)}>
        <IoIosTrash />
      </p>
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
    <div className={classes.container}>
      <h1 className={classes.tfHeading}>Today's Foods</h1>
      <ul>{todaysFoodsList}</ul>
      <p>Total calories: {totalCalories}</p>
    </div>
  );
};

export default TodaysFood;
