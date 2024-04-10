import { useState } from "react"
import foodsJson from '../foods.json'
import AddFoodForm from "./AddFoodForm"
import FoodBox from "./FoodBox"

function FoodList() {
    const [foods, setFoods] = useState(foodsJson)

    const handleDeleteEvent = (event) => {
      setFoods(foods.filter(e => e.id !== event.id))
    }
  
    const handleCreate = (food) => {
      setFoods([...foods, food])
    }
    return (
      <>
        <div className="App">
        <h1>LAB | React IronNutrition</h1>
        </div>
  
        <div>
          <AddFoodForm onCreate={handleCreate}/>
        </div>
  
        <div>
        {foods.map((food) => (
          <FoodBox key={food.id} food={food} onDelete={handleDeleteEvent}/>
        ))}
        </div>
  
      </>
    );
}

export default FoodList