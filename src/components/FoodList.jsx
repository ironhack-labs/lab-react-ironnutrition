import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";

export default function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  function handleDeleteFood(foodId) {
    setFoods((current) =>
      current.filter((food) => {
        return food.id !== foodId;
      })
    );
  }

  function handleAddFood(newFood) {
    setFoods([...foods, newFood]);
  }
  return (
    <div>
      <AddFoodForm onAddFood={handleAddFood} />
      {foods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          deleteFood={() => handleDeleteFood(food.id)}
          on
        />
      ))}
    </div>
  );
}
