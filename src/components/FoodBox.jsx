import React from "react";

function FoodBox(props) {
  const deleteFood = () => {
    props.deleteFood(props.food.id);
  };

  return (
    <div>
      <p>
        <b>{props.food.name}</b>
      </p>

      <img src={props.food.image} />

      <p>Calories: {props.food.calories} </p>
      <p>
        Servings <b>{props.food.servings}</b>
      </p>

      <p>
        <b>Total Calories: {props.food.servings * props.food.calories} </b>
        kcal
      </p>

      <button onClick={deleteFood}>Delete</button>
    </div>
  );
}

export default FoodBox;
