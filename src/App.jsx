import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";
import FoodSearch from "./components/FoodSearch";
function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);
  function handleDelete(id) {
    let newArr = foods.filter((oneFood) => id !== oneFood.id);
    setFoods(newArr);
  }

  function addFood(newFood) {
    setFoods([...foods, newFood]);
  }
  function handleSearch(value) {
    if (!value) {
      setFilteredFoods(foods);
    } else {
      let searchList = filteredFoods.filter((elem) =>
        elem.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFoods(searchList);
    }
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodSearch handleSearch={handleSearch} />
      <FoodList
        addFood={addFood}
        handleDelete={handleDelete}
        foods={filteredFoods}
      />
    </div>
  );
}

export default App;
