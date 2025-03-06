import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";

function App() {
  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;
