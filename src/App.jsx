import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (id) => {
    const updatedFoods = foods.filter((element) => element.id !== id);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      return (
          <FoodBox key={food.id} food={food} handleDelete={handleDelete} />  );
    </div>
  );
}

export default App;
