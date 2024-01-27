import React from 'react'
import FoodBox from "./FoodBox"
import foodsJSON from "../foods.json"
import AddFoodForm from "./AddFoodForm"
import { useState } from "react";


function FoodList() {
    const [foods, setFood] = useState(foodsJSON)

    function deleteFood(foodId) {
      const filteredFoods = foods.filter((oneFood) => {
        return oneFood.id !== foodId
      })
      setFood(filteredFoods)
  }
  
    return (
      <div>
        <h1>LAB | React IronNutrition</h1>
        <AddFoodForm foods={foods} setFood={setFood} ></AddFoodForm>
          {foods.map(food => {
            return <FoodBox key={food.id} foods={foods} food ={food} deleteFood={deleteFood} setFood={setFood} ></FoodBox>
          })}
      </div>
    );
}

export default FoodList