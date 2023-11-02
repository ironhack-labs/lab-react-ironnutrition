// Your code here
import React from "react";


function FoodBox(props){

    const totalCalories = props.food.calories * props.food.servings;

    return(
    <div>
        <h1>{props.food.name}</h1>
        <img src={props.food.image}></img>
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <b>Total Calories: {totalCalories}</b> kcal
        <p>
        <button onClick={() => props.deleteFood(props.food.id)}>Delete</button>
        </p>
    </div>
    )
}

export default FoodBox;