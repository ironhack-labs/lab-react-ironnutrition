import foodsJson from "./foods.json";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";
import "./App.css";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1 className="title">Food List</h1>

      <AddFoodForm foods={foods} setFoods={setFoods} />

      {foods.length === 0 ? (
        <p>There are no existing Foods</p>
      ) : (
        <div className="Food">
          <FoodList foods={foods} setFoods={setFoods} />
        </div>
      )}
    </div>
  );
}

export default App;
