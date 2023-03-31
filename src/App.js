import './App.css';
import foods from "./foods.json";
import FoodList from './components/FoodList/FoodList';




function App() {
  return (
    <div className="App">
      <FoodList allFoods={foods} />
    </div>
  );
}

export default App;
