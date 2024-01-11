import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  const [foods, setFood] = useState(foodsJson);

  const deleteFood = (foodID) => {
    const newFoodList = foods.filter(function (foodItem) {
      return foodItem.id != foodID;
    });
    setFood(newFoodList);
  };

  const addNewFood = (newFood) => {
    const newList = [newFood, ...foods];
    setFood(newList);
  };


  return (
    <>
        <h1>LAB | React IronNutrition</h1>
      <AddFoodForm cbAddFood={addNewFood} />
      {foods.length === 0 && <p>"Oops! There is no more content to show."</p>}
      {foods.map(function (foodItem) {
          return (
            <FoodBox
            name={foodItem.name}
            calories={foodItem.calories}
            image={foodItem.image}
            servings={foodItem.servings}
            id={foodItem.id}
            cbDeleteFood={deleteFood}
            />
            );
      })}
    </>
  );
}

export default FoodList