// Your code here


import React from 'react';

function FoodBox({ food,deleteFood }) {
  const { name, calories, image, servings } = food;
  const totalCalories = servings * calories;

const handleDelete = () => {
  deleteFood(food);
}

  return (
    <div className='food-box'>

      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick = {handleDelete}> Delete </button>
    </div>
  );
}

export default FoodBox;