import "./App.css";
import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";

function App() {
  return (
    <>
    <h1 className='food-Title'>Food List</h1>
      <div>
        <FoodList />
      </div>
    </>
  );
}

export default App;

