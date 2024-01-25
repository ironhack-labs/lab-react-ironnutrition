import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  // const [food, setFood] = useState(foodsJson)

  return (
    <div className="App">
      <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      />{" "}
    </div>
  );
}

export default App;
