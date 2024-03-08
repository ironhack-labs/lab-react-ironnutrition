import FoodBox from "./FoodBox";
import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import foodsJson from "../foods.json";

function FoodList() {
  const addNewFood = (foodItem) => {
    setFoodList([...foodList, foodItem]);
  };

  const deleteFoodItem = (id) => {
    const newArray = [...foodList];
    newArray.forEach((food) => {
      if (food.id == id) {
        const foodIndex = newArray.indexOf(food);
        newArray.splice(foodIndex, 1);
      }
    });
    setFoodList(newArray);
  };

  const [foodList, setFoodList] = useState(foodsJson);

  return (
    <div>
      <AddFoodForm addNewFood={addNewFood} />
      <div className="item-list">
        {foodList.map((food) => (
          <FoodBox deleteFoodItem={deleteFoodItem} key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default FoodList;
