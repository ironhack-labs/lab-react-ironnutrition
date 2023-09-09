//import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  

  return (
    <div className="App">
    <h1>Food List</h1>
     <FoodBox />
     <AddFoodForm  />
    </div>
  );
}

export default App;
