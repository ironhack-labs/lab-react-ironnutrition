import React from 'react'

function FoodBox(props) {
    
    const totalCalories = props.food.calories * props.food.servings
  return (
    <div>
        <p className="name">{props.food.name}</p>
        <img src={props.food.image}></img>
        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>
        <p>
            <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <button onClick={() => props.deleteFood(props.food.id)}>Delete</button>
    </div>
  )
}

export default FoodBox
