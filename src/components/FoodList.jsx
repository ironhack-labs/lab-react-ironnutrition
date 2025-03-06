import React from 'react'
import foodsJson from "../foods.json"
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import { useState } from "react";

function FoodList() {
  
    const [allFood, setAllFood] = useState(foodsJson);
  
  
    return (
        <div>
             <h1>LAB | React IronNutrition</h1>

<            AddFoodForm allFood={allFood} setAllFood={setAllFood} />

            {allFood.map((cadaComida, indice) => {
                return (
                <FoodBox 
                food={cadaComida} 
                indice={indice}
                allFood={allFood}
                setAllFood={setAllFood} /> 
                )
            })}
        </div>
  )
}

export default FoodList
