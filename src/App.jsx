import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"
import { useState } from "react";

function App() {
  const [ foods, setFoods ] = useState(foodsJson)

  function deleteFood(food) {
    const index = foods.indexOf(food)
    const updatedFoods = foods.toSpliced(index, 1)
    setFoods(updatedFoods)
  }

  function addNewFood(event) {
    event.preventDefault()
    const name = document.querySelector('[name="name"]').value
    const image = document.querySelector('[name="image"]').value
    const calories = document.querySelector('[name="calories"]').value
    const servings = document.querySelector('[name="servings"]').value
    const updatedFoods = foods.concat({name, image, calories, servings})
    setFoods(updatedFoods)
    document.querySelector('[name="name"]').value = ''
    document.querySelector('[name="image"]').value = ''
    document.querySelector('[name="calories"]').value = 0
    document.querySelector('[name="servings"]').value = 0
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <h2>Add Food Entry</h2>
      <AddFoodForm addNewFood={addNewFood} />
      <h2>Food List</h2>
      {foods.map(food => (
        <FoodBox key={food.id} food={food} deleteFood={deleteFood}/>
      ))}
    </div>
  );
}

export default App;
