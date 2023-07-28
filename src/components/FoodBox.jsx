import React from "react"

function FoodBox(props) {
    return (
        <div>
            <p>{props.food.name}</p>
            <img src={props.food.image} />
            <p>Calories: {props.food.calories}</p>
            <p>Servings {props.food.servings}</p>
            <p>
                <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
            </p>
            <button onClick={() => props.deleteFood(props.food.name)}>Delete</button>
        </div>
    )
}

export default FoodBox
