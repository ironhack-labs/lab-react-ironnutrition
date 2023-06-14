import "./App.css";
import {useState} from "react";
import foodList from "./foods.json"
import FoodBox from "./components/FoodBox";

function App() {
const [foods, setFood] = useState(foodList)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      } } 
      />
    </div>
  );
}

export default App;
