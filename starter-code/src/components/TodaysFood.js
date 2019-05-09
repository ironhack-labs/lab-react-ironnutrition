import React from 'react';

const TodaysFood = ({ foods }) => {
  const foodList = Object.values(foods).map(({ name, calories, quantity }, index) => (
    <li key={index}>
      {quantity} {name} - {quantity * calories} cal
    </li>
  ));
  const totalCalories = Object.values(foods).reduce((sum, { calories, quantity }) => sum + quantity * calories, 0);

  return (
    <div>
      <h2 className="subtitle">Today's foods</h2>
      <ul style={{ listStyle: 'circle' }}>{foodList}</ul>
      <strong>Total: {totalCalories} cal</strong>
    </div>
  );
};

export default TodaysFood;
