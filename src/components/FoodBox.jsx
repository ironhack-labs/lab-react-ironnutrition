import { useState } from 'react';

function FoodBox(props) {
  const { food, clickToDelete } = props;

  return (
    <div>
      <h2>{food.name}</h2>
      <p>Number of Calories: {food.calories}</p>
      <img src={food.image} alt="" />
      <p>Number of Servings: {food.servings}</p>
      <p>Total of Calories: {food.calories * food.servings}</p>
      <button
        onClick={() => {
          clickToDelete(food.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default FoodBox;
