import React from 'react'

function FoodBox(props) {
  return (
    <div className='foodBox'>
        <p>{props.food.name}</p>
        <img className='foodPicture' src={props.food.image} alt="" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>

    <p>
    <b>Total Calories: {props.food.servings*props.food.calories} </b> kcal
    </p>

    <button onClick={()=>{ props.deleteFood(props.food.id)}}>Delete</button>
    </div>
  )
}

export default FoodBox