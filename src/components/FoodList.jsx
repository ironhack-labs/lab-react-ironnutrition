import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  function deleteFood(foodId) {
    const foodscopy = foods.slice();

    const foodIndex = foods.findIndex(function (el) {
      return el.id === foodId;
    });

    console.log("foodIndex", foodIndex);

    foodscopy.splice(foodIndex, 1);

    setFoods(foodscopy);
  }

  function addElement(objet) {
    console.log("coucou addelment f");
    const foodListCopy = foods.slice();

    foodListCopy.push({
      id: objet.id,
      name: objet.name,
      calories: objet.calories,
      image: objet.image,
      servings: objet.servings,
    });

    setFoods(foodListCopy);
  }
  return (
    <div>
      <h2>Nutrition</h2>

      <AddFoodForm addFood={addElement} />

      {foods.map(function (food) {
        return <FoodBox food={food} key={food.id} delete={deleteFood} />;
      })}
    </div>
  );
}

export default FoodList;
