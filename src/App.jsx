import "./App.css";
import foodsJson from './foods.json';
import FoodBox from "./components/FoodBox";
import { useState } from 'react';

function App() {

  const [foodList, setFoodList] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox foodList={ foodList } />
    </div>
  );
}

export default App;
