
import React from 'react';

function FoodBox({ food, onDelete }) {
  const { name, calories, image, servings } = food;

  const itemDelete = () => {
    onDelete(name);

  };

  return (

    <div className="FoodBox">
      
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {servings * calories} kcal</b>
      </p>

      <button onClick={itemDelete}>Delete</button>
    </div>

  );
}

export default FoodBox;
