// Your code here
import React from 'react'

const FoodBox = (props) => {
    const { food, clickToDelete } = props
    const totalCalories = food.calories * food. servings
  return (
    <div>
        <div>
           
       <p>NAME: {food.name}</p>

  <img src={food.image} width={200} height={200} />

  <p>Calories: {food.calories}</p>
  <p>Servings: {food.servings}</p>

  <p>
    <b>Total Calories: {totalCalories} </b> kcal
  </p>

  <button onClick={() => clickToDelete(food.id)}>Delete</button>
</div>
    </div>
  )
}

export default FoodBox