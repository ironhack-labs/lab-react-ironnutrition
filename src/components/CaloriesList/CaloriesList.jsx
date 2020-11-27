import React from 'react';
import classes from './CaloriesList.module.css';

const CaloriesList = ({ foodList }) => {
  const returnTotalCalories = (foodList) => {
    let total = 0;
    foodList.forEach((food) => (total += food.calories * food.quantity));
    return total;
  };

  return (
    <div className="caloriesList-container">
      <h1>Selected Food:</h1>
      <div className={classes.container}>
        {foodList.map((food, i) => (
          <div key={i}>
            <div>
              {food.quantity}x {food.name}
            </div>
          </div>
        ))}
      </div>
      <div>Total Calories: {returnTotalCalories(foodList)}</div>
    </div>
  );
};

export default CaloriesList;
