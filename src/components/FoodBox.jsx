// Your code here
import React from "react";

function FoodBox (props){
    let totalKcal = props.food.calories * props.food.servings;
    return (
        <div>
            <p>{props.food.name}</p>
            <img src={props.food.image} width={300} height={300} />
            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p>
                <b>Total Calories: {totalKcal} kcal</b>
            </p>
            <button onClick={() => props.deleteFood(props.food.id)}>Delete</button>
        </div>
    )
};

export default FoodBox;