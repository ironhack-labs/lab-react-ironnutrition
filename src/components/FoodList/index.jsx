import { useState } from "react";
import foodsJson from "../../foods.json";
import FoodBox from "../FoodBox";
import AddFoodForm from "../AddFoodForm";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    setFoods(filteredFoods);
  };

  const addNewFood = (newFood) => {
    // Create a new array that has all the foods + new food
    const newListOfFoods = [...foods, newFood];

    // Update the state with a new list of foods
    setFoods(newListOfFoods);
  };
  return (
    <div>
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm addNewFood={addNewFood} />
      {foods.map((food, index) => {
        return <FoodBox key={index} food={food} delete={deleteFood} />;
      })}
    </div>
  );
}

export default FoodList;
