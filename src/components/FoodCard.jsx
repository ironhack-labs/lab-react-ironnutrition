import React from 'react';

function FoodCard(props) {
  const { food } = props;

  return (
    <div className="FoodCard">
      <h2>{food.name}</h2>
      <p>Calories: {food.calories}</p>
      <img src={food.image} width={'100px'} />
      <p>Servings: {food.servings}</p>
      <button> Delete</button>
    </div>
  );
}

export default FoodCard;
