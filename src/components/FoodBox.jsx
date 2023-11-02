import React from "react";

function FoodBox({ food }) {
  const { name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  return (
    <div className="food-box">
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories} kcal</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button>Delete</button>

    </div>
  );
}

export default FoodBox;
