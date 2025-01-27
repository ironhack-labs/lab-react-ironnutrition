import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm";
import FoodSearch from "./components/FoodSearch";



function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [searchText, setSearchText] = useState("");
  
  const deleteFood = (foodId) => {
    const filteredFood = foods.filter((food) => food.id !== foodId)
    setFoods(filteredFood)
  }

  const addFood = (food) => {
    setFoods([
      ... foods,
      food
    ]) 
  }

  const filterFood = () => {
    return foods.filter((food) => food.name.toLowerCase().includes(searchText.toLowerCase()))
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood}/>
      <FoodSearch searchText={searchText} setSearchText={setSearchText} />
      <div className="food-list">
        {filterFood().map((food) => (
          <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
        ))}
      </div>
    </div>
  );
}

export default App;
