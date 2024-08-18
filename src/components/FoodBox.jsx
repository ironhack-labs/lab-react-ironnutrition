import React from 'react'
import "./FoodBox.css";

function FoodBox(props) {
    const {food, onDelete} = props;
  return (
    <li className="food-list-box">
        <h3>{food.name}</h3>
        <img src={food.image} alt="food image" className='food-image' />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p className='total-cals'><strong>Total Calories:</strong> {food.servings * food.calories} kcal</p>
        <button onClick={onDelete}>Delete</button>
    </li>
  )
}

export default FoodBox
