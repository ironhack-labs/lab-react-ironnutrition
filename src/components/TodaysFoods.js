import React from 'react';

const TodaysFood = ({todayFoodList, totalCalories}) => {
  return (
    <div>
      <h2><strong>Today's Food!</strong></h2>
      <ul>
        {todayFoodList.map((food, index) => (
          <li key={index}>- {food.quantity} {food.name} {food.calories} cal</li>
      ))}
      </ul>
      
      <h2><strong>Total calories: {totalCalories}</strong></h2>
    </div>
    
  );
};

export default TodaysFood;