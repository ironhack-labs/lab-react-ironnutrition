import { useState } from "react"
import FoodBox from "./FoodBox"
import foodsJson from "../foods.json"
import AddFoodForm from "./AddFoodForm"

function FoodList() {
    const [foods, setFoods] = useState(foodsJson)

    const removeFood = (id) => {
        const filteredFoods = foods.filter((food) => food.id !== id)
        setFoods(filteredFoods)
    }

    const addFood = (newFood) => {
        setFoods([
            ...foods,
            newFood
        ])
    
}

return (
    <> 
    <AddFoodForm addFood = {addFood} />

    {foods.map((food) => (
        <FoodBox food = {food} removeFood = {removeFood} key = {food.id}/>
    ))}
    </>
)
}

export default FoodList