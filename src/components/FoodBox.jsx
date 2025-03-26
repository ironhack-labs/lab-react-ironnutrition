// Your code here
import React from 'react';

function FoodBox({ food, onDelete }) {
  const { name, calories, image, servings } = food;

  return (
    <div>
      <p>{name}</p>

      <img src={image} alt={name} width="100" />

      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>

      <p>
        <b>Total Calories: {servings * calories}</b> kcal
      </p>

      <button onClick={() => onDelete(name)}>Delete</button>
    </div>
  );
}

export default FoodBox;

