import React, { useState } from "react";
import FoodBox from "./FoodBox";
import Search from "./Search";
import foodsJson from "./foods.json";

function FoodList() {
  const [foodItems, setFoodItems] = useState([]);
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);
  const [message, setMessage] = useState("");

  const addFoodItem = (name, calories) => {
    const newFoodItem = { name, calories };
    setFoodItems([...foodItems, newFoodItem]);
  };
  //const deleteFood = (foodNameStr) => {
  //  const filteredItems = updated.food((item) =>
   // return onbeforeunload.name !== foodNameStr;
  //});
  setUpdatedFoods(filteredFoods);

  const handleSearch = (searchTerm) => {
    const filteredItems = foodItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredFoodItems(filteredItems);

    if (filteredItems.length === 0) {
      setMessage("No matching items found.");
    } else { 
      setMessage("");
    }
  };


  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.calories} calories
          </li>
        ))}
      </ul>
      <button onClick={() => addFoodItem("Example Food", 100)}>
        Add Food Item
      </button>
      <Search onSearch={handleSearch} />
    {message && <p>{message}</p>}
    {filteredFoodItems.length === 0 ? (
      <p>Oops! There is no more content to show.</p>
    ) : (
      filteredFoodItems.map((food, index) => (
        <FoodBox key={index} food={food} />
      ))
    )}
    </div>
  );
}

export default FoodList;
