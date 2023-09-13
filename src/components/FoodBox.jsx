import React from "react";
import "./FoodBox.css"

function FoodBox(props){

    const handleDelete = () => {
    props.callbackToDeleteFood(props.food.name);
    }

    return(
    <div>
        <p>{props.food.name}</p>

        <img className="image" src={props.food.image} />

        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>

        <p>
        <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
        </p>

        <button onClick={handleDelete}>Delete</button>
    </div>
    )
}

export default FoodBox;