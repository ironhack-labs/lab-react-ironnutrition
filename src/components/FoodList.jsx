import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import foodsJson from "../foods.json";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Row } from "antd";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);

  const deleteFoodItem = (foodId) => {
    console.log("deleted", foodId);
    const newFoods = foods.filter((food) => food.id != foodId);
    setFoods(newFoods);
    setFilteredFoods(newFoods);
  };

  const createFoodItem = (name, calories, image, servings) => {
    const newFoodItem = {
      id: uuidv4(),
      name,
      calories: Number(calories),
      image,
      servings: Number(servings),
    };
    const newFoods = [newFoodItem, ...foods];
    setFoods(newFoods);
    setFilteredFoods(newFoods);
  };
  const filterFoods = (inputText) => {
    if (!inputText) {
      setFilteredFoods(foods);
    } else {
      setFilteredFoods(
        foods.filter((food) =>
          food.name.toLowerCase().includes(inputText.toLowerCase())
        )
      );
    }
  };
  return (
    <div>
      <Row>
        <h1>LAB | React IronNutrition</h1>
      </Row>

      <Row>
        <Search filterFoods={filterFoods} />
      </Row>

      <Row>
        <AddFoodForm createFoodItem={createFoodItem} />
      </Row>

      <Row>
        {!filteredFoods.length ? (
          <p>Oops! There is no more content to show.</p>
        ) : (
          filteredFoods.map((food) => (
            <FoodBox
              key={food.id}
              food={food}
              deleteFoodItem={deleteFoodItem}
            />
          ))
        )}
      </Row>
    </div>
  );
}

export default FoodList;
