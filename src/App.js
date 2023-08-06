// src/App.js
import React, {useState} from 'react';
import './App.css';
import foodsData from "./foodsData.json";
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsData);

  return (
    
    <div>
      <h1>Food List</h1>
      <div className='food-container'>
        {foods.map((food) => (
          <div key={food.id}>
            <FoodBox food= {food}/>
          </div>
        ))}
      </div>
    </div>
  );
}




export default App;
