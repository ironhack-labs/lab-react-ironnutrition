import React from 'react';

const TodayFoods = (props) => {

  const { foods } = props;
  const calories  = foods.map((food) => food.quantity * food.calories );
  const totalCalories = calories.reduce((acc, value) => acc + value);
  return (
    <div className="today-list">
      <h2>Today's foods</h2>
      <ul>
        {
          foods.map((food, i) =>  {
            return (
              <li key={i}>
                {food.quantity} {food.name} = { food.quantity * food.calories} cal
              </li>
            )
          })
        }
      </ul>
      <p>Total: {totalCalories} cal</p>
    </div>
  )
} 

export default TodayFoods;