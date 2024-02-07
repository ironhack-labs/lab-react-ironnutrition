import React from "react";

function FoodBox(props) {
  return (
    <div className="foodItem" key={props.food.id}>
      <h2>{props.food.name}</h2>
      <img className="image" src={props.food.image} alt="Food Image" />
      <p>Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>
      <p>
        <b>Total calories: {props.food.servings * props.food.calories} kcal</b>
      </p>
      <button onClick={() => props.onDelete(props.food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
