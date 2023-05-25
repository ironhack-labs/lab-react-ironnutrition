import './App.css';
import {useState} from 'react';
import foodsJson from "./foods.json";
import FoodBox from './components/food-box';
import AddFoodForm from './components/add-food-form';
import Search from './components/search-bar';

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      {foods.map(food=>{
        return (
          <div>
            <FoodBox food={food}/>
          </div>
        )
      })}
      <AddFoodForm addNewFood={addNewFood}/>
      <Search/>
    </div>
  );
}
export default App;
