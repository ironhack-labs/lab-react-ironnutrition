import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";
import { Row } from "antd";
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  // Add food
  const handleAddFood = (newFood) => {
    setFoods((prevFoods) => [newFood, ...prevFoods]);
    console.log("Added:", newFood);
  };

  // Delete food
  const handleDeleteFood = (foodId) => {
    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== foodId));
    console.log("Deleted:", foodId);
  };

  // Search

  const [searchTerm, setSearchTerm] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <AddFoodForm onAddFood={handleAddFood} />
      <Search value={searchTerm} onChange={setSearchTerm} />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <FoodList foods={filteredFoods} onDeleteFood={handleDeleteFood} />
      </Row>
    </main>
  );
}

export default App;
