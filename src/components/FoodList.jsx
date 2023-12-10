import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import FoodEmpty from "./FoodEmpty";

export default function FoodList() {
  const [foodArray, setFoodArray] = useState(foodsJson);
  const handleDelete = (id) => {
    setFoodArray([...foodArray].filter((food) => food.id !== id));
  };
  return (
    <div>
      <AddFoodForm setFoodArray={setFoodArray} foodArray={foodArray} />
      <FoodBox foodArray={foodArray} handleDelete={handleDelete} />
      {!foodArray.length && <FoodEmpty />}
    </div>
  );
}