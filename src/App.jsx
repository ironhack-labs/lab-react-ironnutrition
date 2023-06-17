import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodList></FoodList>
    </div>
  );
}

export default App;
