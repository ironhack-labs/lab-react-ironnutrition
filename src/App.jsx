import { useState } from "react";
import "./App.css";
import foodsJson from './foods.json'
import FoodList from "./components/FoodList/FoodList";
import AddFoodForm from "./components/AddFoodForm/AddFoodForm";
import Search from "./components/Search/Search";

function App() {

  const [foods, setFoods] = useState(foodsJson)
  const [foodsBackup, setFoodsBackup] = useState(foodsJson)

  const [foodQuery, setFoodQuery] = useState('')

  const handleDelete = (foodId) => {
    const updatedFoodList = foods.filter(food => food.id !== foodId)
    setFoods(updatedFoodList)
  }

  const handleFoodQuery = (event) => {
    const { value } = event.target
    setFoodQuery(value)
    filterNames(value)
  }

  const filterNames = (query) => {
    const filteredFoodsByName = foodsBackup.filter(food => food.name.toLowerCase().includes(query))
    setFoods(filteredFoodsByName)
  }

  const addNewFood = (newFood) => {
    const updatedFoodList = [newFood, ...foods]
    setFoods(updatedFoodList)
    setFoodsBackup(updatedFoodList)
  }

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <Search foodQuery={foodQuery} handleFoodQuery={handleFoodQuery} />
      <FoodList foods={foods} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
