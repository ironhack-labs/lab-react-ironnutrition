import AddFoodForm from "./AddFoodForm"
import FoodBox from "./FoodBox"

import foodsJson from '../foods.json'
import { useState } from "react"



function FoodList() {

    const [foods, setFoods] = useState(foodsJson)

    function deleteFood(foodId) {
      const foodsLeft = foods.filter((oneFood) => {
        return (
          oneFood.id !== foodId
        )
      })
      setFoods(foodsLeft)
    }
  
  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foods={foods} setFoods={setFoods}/>
      {foods.map((food) => {
        return (
            <FoodBox key={food.id} food={food} deleteFood={deleteFood}/>
        )
      })}
    </div>
  )
}

export default FoodList
