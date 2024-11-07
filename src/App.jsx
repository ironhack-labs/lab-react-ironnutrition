import "./App.css";

import { useState } from "react";

import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [fSrchFoods, setFSrchFoods] = useState(foods);
  const [searchFoodStr, setSearchFoodStr] = useState("");

  function filterSearch(searchStr) {
    let filteredFoods = foods.filter(
      (food) => food.name.toUpperCase().search(searchStr.toUpperCase()) >= 0
    );

    setFSrchFoods(filteredFoods);
  }

  function addFood(food) {
    setFoods([...foods, food]);
  }

  function deleteFood(id) {
    let filteredFoods = foods.filter((food) => food.id !== id);

    setFoods([...filteredFoods]);

    let filteredSFoods = filteredFoods.filter(
      (food) => food.name.toUpperCase().search(searchFoodStr.toUpperCase()) >= 0
    );

    setFSrchFoods(filteredSFoods);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      <FoodList
        fSrchFoods={fSrchFoods}
        deleteFood={deleteFood}
        searchFoodStr={searchFoodStr}
        setSearchFoodStr={setSearchFoodStr}
        filterSearch={filterSearch}
      />
    </div>
  );
}

export default App;
