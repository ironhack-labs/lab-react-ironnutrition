// Your code here
// FoodBox.jsx

import React from "react";

const FoodBox = ({ food, removeFood }) => {

    
  

    return ( 
        <div>
  <p>{food.name}</p>
  <img className="food-image" src={food.image} alt={food.name} /> 
   <p>Calories: {food.calories}</p>
  <p>Servings {food.servings}</p>
  <p>
    <b>Total Calories: {food.servings * food.calories} </b> kcal
  </p>

      <button onClick={() => removeFood(food.id)}>Delete</button>
</div>
     );
}
 
export default FoodBox;