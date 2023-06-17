import { useState } from "react";
import "../App.css";
import foodsData from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";
import Search from "./Search";

export default function Foodlist() {
  const [foods, setFoods] = useState(foodsData);
  const [query, setQuery] = useState("");

  const handleDelete = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const handleAddFood = (food) => {
    setFoods([...foods, { ...food }]);
  };

  const handleFilterDatas = (searchQuery) => {
    setFoods(
      foodsData.filter((food) =>
        String(food.name.toLowerCase()).startsWith(searchQuery.toLowerCase())
      )
    );
    setQuery(searchQuery);
  };
  return (
    <>
      <AddFoodForm handleAddFood={handleAddFood} />
      <Search query={query} handleFilterDatas={handleFilterDatas} />
      {foods.length > 0 ? (
        foods.map((food) => <FoodBox key={food.id} food={food} handleDelete={handleDelete} />)
      ) : (
        <div>Oups ! There is no more content to show</div>
      )}
    </>
  );
}
