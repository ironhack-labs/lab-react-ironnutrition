import React, { useState } from "react"
function FoodBox(props) {
    console.log(props)
    
   
    let totalCalories = props.food.calories * props.food.servings

    return (
        <div>
            <h1>{props.food.name}</h1>
            <img src={props.food.image} height={60} alt="food" />
            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p>
                <b>Total Calories:  </b>{totalCalories} kcal
            </p>
            <button onClick={()=>props.onDelete(props.food.name)}>Delete</button>
        </div>
    )
}
export default FoodBox