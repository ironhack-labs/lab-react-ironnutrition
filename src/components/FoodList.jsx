import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";


function FoodList (){

    const [foods, setFoods] = useState(foodsJson)


    const deleteFood = (foodId) =>{
        const filteredFoods = foods.filter ((food)=>{
            return food.id !== foodId
        })
        setFoods(filteredFoods);

    }
    
    const addNewFood = (newFood)=>{
        const updatedFoods = [...foods, newFood];
        setFoods(updatedFoods);
    }


    return(
        <div>
            {foods.map((food)=>{
                return(
                    <FoodBox 
                    key = {food.id}
                    food = {food}
                    clickToDelete = {deleteFood}    
                    />
                )
            })}
            <AddFoodForm 
                addNewFood = {addNewFood}
            />
        </div>
    )
}

export default FoodList;