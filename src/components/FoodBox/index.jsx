import React from 'react';
import "./index.css"

export const FoodBox = ({ food }) => {
  return (
    <div className="FoodBox">
      <div className="Title">
        <h3>{food.name}</h3>
      </div>
      <div className="Content">
        <img src={food.image} alt="Img" />
        <h4>Calories: {food.calories}</h4>
        <h4>Servings: <strong>{food.servings}</strong> </h4>
        <h4> <strong>Total calories: {food.calories}</strong>kcal</h4>
        <button className="Btn">Delete</button>
      </div>
    </div>
  );
};
