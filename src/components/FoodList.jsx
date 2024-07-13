import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    const updatedFoods = [newFood, ...foods];
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const deleteFood = (foodName) => {
    const updatedFoods = foods.filter((food) => food.name !== foodName);
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const searchFood = (query) => {
    const filteredList = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoods(filteredList);
  };

  return (
    <div>
      <Search searchFood={searchFood} />
      <AddFoodForm addFood={addFood} />
      {filteredFoods.length > 0 ? (
        filteredFoods.map((food, index) => (
          <FoodBox key={index} food={food} deleteFood={deleteFood} />
        ))
      ) : (
        <p>Oops! There is no more content to show.</p>
      )}
    </div>
  );
}

export default FoodList;

