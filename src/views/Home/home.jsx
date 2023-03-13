import Food from "../../foods.json"
import { FoodList } from "../../components/FoodList"
import { AddFoodForm } from "../../components/AddFoodForm"
import { useState } from "react"

export const Home = () => {
  const [foodJSON, setFoodJSON] = useState(Food)
  const createFood = (newFood) => {
    setFoodJSON([newFood, ...Food])
  }
  return (
    <div>
    <h1>Add Food Entry</h1>

    <AddFoodForm createFood={createFood}/>

      <FoodList foods={foodJSON}/>

    </div>
  )
}
