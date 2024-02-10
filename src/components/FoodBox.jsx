// Your code here
import React, { useCallback } from "react";


function FoodBox({food, callbackToDelete}) {

  return(
    <div>
      <p>{food.name}</p>

      <img src={food.image} />

      <p>Calories: {food.calories} </p>
      <p>Servings {food.servings} </p>

      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>

      <button onClick={() => {
        callbackToDelete(food.id);
      }}
      >Delete</button>
    </div>
  );
}

export default FoodBox;
