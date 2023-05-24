import React from 'react';

const FoodBox = ({ food, onDelete }) => {
  const { name, calories, image, servings } = food;

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="food-box">
      <img width="200px" height="200px" src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default FoodBox;