import AddFood from "./AddFoodForm";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import { useState } from "react";

let FoodList = () =>{
  const [foods, setFoods] = useState(foodsJson)

    return(
        <div>
        <h1>LAB | React IronNutrition</h1>
        <AddFood method={setFoods} foods={foods}/>
        {foods.map((food, index)=>{
          return(
            <FoodBox food={food} foods={foods} setFoods={setFoods} key={index}/>
          )
        })}
         </div>
    )
   
}

export default FoodList