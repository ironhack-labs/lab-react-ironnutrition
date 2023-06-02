import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm allFoods={foods} setFoods={setFoods}/>
      <div className='food-box-map'>
        {foods.map((foodItem) => 
          <FoodBox singleFood={foodItem} />
        )}
      </div>
     
    </div>
  );
}

export default App;
