// Your code here
import React from "react";

function FoodBox({ food, onDelete }) {
  const { name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  return (
    <div className="food-box">
      <p>{name}</p>
      <img src={image} alt={name} width={150} />

      <p>Calories: {calories} kcal</p>
      <p>Servings: {servings}</p>

      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>

      <button onClick={() => onDelete(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
