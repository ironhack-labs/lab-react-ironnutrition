import React from 'react';

function FoodBox(props) {
  const { name, calories, image, servings } = props.food;
  return (
    <div>
      <h2>{name}</h2>
      <p>Calories: {calories}</p>
      <img src={image} width={100} alt={name} />
      <p>Servings: {servings}</p>
    </div>
  );
}

export default FoodBox;
