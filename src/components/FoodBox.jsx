import React from 'react';

export default function FoodBox({ food, deleteFoods }) {
  const { name, calories, image, servings } = food;
  const handleFoodList = (e) => {
    deleteFoods(name);
  };
  return (
    <div>
      <p> {name} </p>
      <img src={image} alt="" width={100} />
      <p> Calories: {calories} </p>
      <p>
        <b>Servings: {servings}</b>
      </p>
      <p>
        <b>Total Calories:</b>
        {calories} kcal
      </p>
      <p> {calories} </p>
      <button onClick={handleFoodList}>Delete</button>
    </div>
  );
}
