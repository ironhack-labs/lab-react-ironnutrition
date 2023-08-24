import { useState, useEffect } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
    setFilteredFoods([...foods, newFood]);
  };

  const removeFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const handleSearch = (searchTerm) => {
    const filteredItems = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filteredItems);
  };

  useEffect(() => {
    setFilteredFoods(foods);
  }, [foods]);

  return (
    <>
      <h1>LAB | React IronNutrition</h1>

      <Search onSearch={handleSearch} />

      {filteredFoods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onDelete={() => removeFood(food.id)}
        />
      ))}

      <AddFoodForm onAddFood={addFood} />
    </>
  );
}

export default FoodList;