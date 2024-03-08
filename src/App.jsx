import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
function App() {
  const [food, setFood] = useState(foodsJson)
  function deleteFood(id) {

    const newFoodList = food.filter((item) => { return item.id !== id })
    return setFood(newFoodList)
  }

  const foodlist = food.map((item) => <FoodBox key={item.id} food={item} handleDelete={deleteFood} />)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div>{foodlist}</div>
    </div>
  );
}

export default App;
