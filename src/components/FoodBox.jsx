// import { useState } from "react";


function FoodBox(props) {

    const calculateCalories = props.food.servings * props.food.calories

    return (
        <div>
            <p key={props.food.name}>{props.food.name}</p>

            <img src={props.food.image} width="200px"/>

            <p>Calories: {props.food.calories}</p>
            <p>Servings {props.food.servings}</p>

            <p>
                <b>Total Calories: {calculateCalories} </b> kcal
            </p>

            <button onClick={() => { props.callbackToDelete(props.food.name) }}>Delete</button>
        
        </div>

    )
}

export default FoodBox;

//
