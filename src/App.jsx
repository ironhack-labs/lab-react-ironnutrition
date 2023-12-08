import foodsJson from "./foods.json"
import FoodList from "./components/FoodList";
import "./App.css";

// item 1
function App() {
  return (
    <div>
      <FoodList foodsJson={foodsJson} />
    </div>
  );
}

export default App;
