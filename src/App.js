import { useState } from 'react';
import './App.css';
import foodsFromJson from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foodArr, setFoodArr] = useState(foodsFromJson);

  return (
    <div className="App">
      <h1>Food List</h1>

      {foodArr.map((foodObj) => {
        return (
          <>
          <FoodBox food={foodObj}/> 
          </>
        );
      })}
    </div>
  );
}

export default App;
