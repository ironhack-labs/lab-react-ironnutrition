import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import "../App.css";

function FoodList() {
  const [food, setFood] = useState(foodsJson);
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);
  };

  const filteredFood = food.filter((element) => {
    return element.name.toLowerCase().includes(query);
  });

  const deleteFood = (foodName) => {
    const newList = food.filter((element) => {
      return element.name !== foodName;
    });
    setFood(newList);
  };

  const addFood = (newFood) => {
    const newList = [newFood, ...food];
    setFood(newList);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm callbackToAddFood={addFood} />
      <input type="search" placeholder="Search Food" onChange={handleSearch} />
      {filteredFood.length === 0 && <h3>Oops! There is no more content to show</h3>}
      {filteredFood.map((element) => {
        return (
          <FoodBox
            key={element.id}
            food={element}
            callbackToDelete={deleteFood}
          />
        );
      })}
    </div>
  );
}

export default FoodList;
