import FoodBox from "./FoodBox"
import foodsJson from "../foods.json"
import {useState} from "react"
import AddFood from "./AddFood"

function FoodList(){
const [foods, setFoods] = useState(foodsJson)

const deleteFood = (id) => {
    const filteredFoods = foods.filter((food) => food.id !== id)
    setFoods(filteredFoods)
}
const addFood = (food) => {
    setFoods([
        ...foods,
        food

    ])
} 


    return(
    <div>
        <div>
            <AddFood addFood={addFood}></AddFood>
        </div>
        <div>
            {foods.map((food) => (
                <FoodBox food={food} deleteFood={deleteFood} key={food.id}></FoodBox>
            ))}
        </div>
    </div>
    )
}

export default FoodList