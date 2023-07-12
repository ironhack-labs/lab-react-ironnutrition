import React from "react";

function FoodBox({ food, onDelete }) {
  const { name, calories, image, servings, id } = food;
  const totalCalories = servings * calories;

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div>
      <p>NAME: {name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default FoodBox;

