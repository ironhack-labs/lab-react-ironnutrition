import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";

import "./App.css";

function addElement() {}

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addElement} />
      <FoodList />
    </div>
  );
}

export default App;
