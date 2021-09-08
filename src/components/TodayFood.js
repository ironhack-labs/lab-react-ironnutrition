import React from 'react';
import './TodayFood.css';

const retrieveCalories = (todayFoods) => {
  if (!todayFoods) {
    return 0;
  }
  const totalCalories = todayFoods.reduce(
    (totalCalories, food) => totalCalories + food.calories*food.quantity,
    0
  );
  return totalCalories > 1
    ? totalCalories + ' calories'
    : totalCalories + ' calorie';
};

const retrieveFoodList = (todayFoods) => {
  if (!todayFoods) {
    return '';
  }
  return todayFoods.map((food, index) => (
    <li key={index}>
      {food.quantity} {food.name} = {food.calories * food.quantity}{' '}
      {food.calories > 1 ? ' calories' : ' calorie'}
    </li>
  ));
};

const TodayFood = ({ todayFoods }) => {
  return (
    <div className="today-food-container">
      <h2>Today's foods</h2>
      <ul>{retrieveFoodList(todayFoods)}</ul>
      <hr />
      <h4>Total Calories: {retrieveCalories(todayFoods)}</h4>
    </div>
  );
};

export default TodayFood;
