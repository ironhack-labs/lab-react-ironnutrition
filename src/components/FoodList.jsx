
import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox"
import AddFoodForm from "./AddFoodForm";
import SearchBar from "./SearchBar";

function FoodList() {
  const [food, setFood] = useState(foodsJson);

  const [searchValue, setSearchValue] = useState("")

  const handleDelete = (id) => {
    const filteredFoods = food.filter((eachFood) => {
      return eachFood.id !== id
    })
    setFood(filteredFoods)
  }

  const handleAddNewFood = (newFood) => {
    setFood((current) => {
      const clone = [...current]
      clone.unshift(newFood)
      return clone
    })
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm handleAddNewFood={handleAddNewFood}/>

      <SearchBar searchValue={searchValue}
      setSearchValue={setSearchValue}/>

      <FoodBox
        food={food}
        handleDelete={handleDelete}
        searchValue={searchValue}
      />
    </div>
  );
}

export default FoodList