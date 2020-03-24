import React from 'react';

export const TodayFoods = ({ foods, totalCalories, deleteFood }) => {
  return (
    <>
      <h3>Today's foods</h3>
      <ul>
        {foods
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((food, i) => (
            <li key={i}>
              {food.quantity} {food.name} = {food.calories} cal
              <i
                onClick={() => deleteFood(food.name)}
                className="fas fa-trash"
              ></i>
            </li>
          ))}
      </ul>
      {totalCalories ? <strong>Total: {totalCalories} cal</strong> : ''}
    </>
  );
};
