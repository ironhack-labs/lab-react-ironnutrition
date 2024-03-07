import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";

function App() {

  const [foodList, setFoodList] = useState(foodsJson)
  return (

    <div className="App">
    {foodList.map((food) => (<FoodBox food={food}/>)
    )}
    </div>
  );
}

export default App;
