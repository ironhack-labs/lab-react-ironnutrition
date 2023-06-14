import React from "react";

function FoodBox(props) {
  const calories = props.food.calories;
  const servings = props.food.servings;
  console.log('food =', props.food)
  return (
    <div>
      <p>{props.food.name}</p>
      <img src={props.food.image} />
      <p>Calories: {props.food.calories}</p>
      <p>Servings {props.food.servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button>Delete</button>
    </div>
  );
}

export default FoodBox;
