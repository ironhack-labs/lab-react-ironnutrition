import React from "react"

function FoodBox (props) {

const {food, clickToDelete} = props

const totalCalories = food.calories * food.servings

return (
    <div>
    <p>{food.name}</p>
  
    <img src={food.image} />
  
    <p>Calories: {food.calories}</p>
    <p>Servings: {food.servings}</p>
  
    <p>
      <b>Total Calories: {totalCalories} kcal </b> 
    </p>
  
    <button onClick={() => clickToDelete(food.id)}>Delete</button>

  </div>
)
}

export default FoodBox