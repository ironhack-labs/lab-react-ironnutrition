import React from 'react';

const FoodCard = ({ food }) => {
  return (
    <div className="card FoodCard" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <img src={food.image} className="card-img" alt="..." />
        <p className='card-text'>Calories: {food.calories}</p>
        <p className='card-text'>Servings: {food.servings}</p>
        <p className='card-text'>Total Calories: {food.calories * food.servings}</p>
        <a href="#" className="btn btn-primary">Delete</a> 
      </div>
    </div>
  );
};

export default FoodCard;