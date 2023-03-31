import './App.css';
import foods from "./foods.json";
import FoodList from './components/FoodList/FoodList';
import FoodBox from './components/FoodBox/FoodBox';


function App() {
  return (
    <div className="App">
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
    </div>
  );
}

export default App;
