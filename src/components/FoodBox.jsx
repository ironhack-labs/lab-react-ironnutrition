import React from "react";


 function FoodBox(props) {
  return (
    <div className ="recipes">
      <p>{props.food.name}</p>
      <img className="food-image" src={props.food.image} alt={props.food.name} />
      <p>Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>
      <p>
        <b>Total Calories: {props.food.calories * props.food.servings}</b> kcal
      </p>
      <button onClick={() => props.onClick(props.food.id)}>Delete</button>
    </div>
  );
}
 export default FoodBox;