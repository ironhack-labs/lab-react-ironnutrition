import { useState } from "react";
import foodList from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

import "../App.css";

function FoodList() {
  const [foods, setFood] = useState(foodList);
  const [searchWord, setSearchWord] = useState("");

  function deleteFood(id) {
    const foodsCopy = foods.slice();
    const foodIndex = foods.findIndex(function (el) {
      return el.id === id;
    });
    foodsCopy.splice(foodIndex, 1);
    setFood(foodsCopy);
  }

  function addFood(obj) {
    const foodsCopy = foods.slice();
    foodsCopy.push({
      id: Math.random() * 1000000000000,
      name: obj.name,
      image: obj.image,
      calories: obj.calories,
      servings: obj.servings,
    });
    setFood(foodsCopy);
  }

  function handleSearch(event) {
    setSearchWord(event.target.value);
  }

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <Search value={searchWord} handleSearch={handleSearch} />
      <AddFoodForm addTheFood={addFood} />
      <div id="foodBoxes">
        {filteredFoods.map((el) => {
          return <FoodBox key={el.id} food={el} deleteTheFood={deleteFood} />;
        })}
      </div>
    </div>
  );
}

export default FoodList;
