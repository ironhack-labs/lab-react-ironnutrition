import { useState } from 'react'
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

export default function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [newItem, setNewItem] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const removeItem = (indexToRemove) => {
    setFoods((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      id: Math.random(),
      name: newItem.name,
      image: newItem.image,
      calories: newItem.calories,
      servings: newItem.servings,
    };
    setFoods((prevFoods) => [newFood, ...prevFoods]);
  };
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };
  const filteredFood = foods.filter((food) =>
    food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
       <AddFoodForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
        foods={filteredFood}
        removeItem={removeItem}
      />
    </>
  )
}
