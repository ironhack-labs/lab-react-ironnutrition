import React from "react";

function FoodBox({ food, onDelete }) {
  return (
    <div className="food-box">
      <p>{food.name}</p>
      <img src={food.image} alt={food.name} width="100" />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>
      <button onClick={() => onDelete(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
