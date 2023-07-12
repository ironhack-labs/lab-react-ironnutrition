import React from "react";

function FoodBox({ food, deleteFunction }) {
  const { id, name, calories, image, servings } = food;
  const totalCalories = servings * calories;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={() => deleteFunction(id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
