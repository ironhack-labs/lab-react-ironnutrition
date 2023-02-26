import React from 'react';

function FoodCard(props) {
  const { food } = props;

  return (
    <div className="FoodCard">
      <h3>{food.name}</h3>
      <p>Calories: {food.calories}</p>
      <img src={food.image} width={'100px'} />
      <p>Servings: {food.servings}</p>
    </div>
  );
}

export default FoodCard;
