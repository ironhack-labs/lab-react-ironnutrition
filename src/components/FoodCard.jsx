import React from 'react';

function FoodCard(props) {
  const { food } = props;

  return (
    <div className="FoodCard">
      <h2>{food.name}</h2>
      <img src={food.image} width={'100px'} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        {' '}
        <b>Total Calories: {food.servings * food.calories}</b> kcal
      </p>
      <button> Delete</button>
    </div>
  );
}

export default FoodCard;
