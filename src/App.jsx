// src/App.js
import './App.css';
import foodsJson from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App () {
  let [foods, setFoods] = useState(foodsJson);

  return <div className="App">
    <div>
      <h3>Food List</h3>
    </div>
    <div className='food-grid'>
      {foods.map((food, index)=>{
            return(<FoodBox key={food.id} food ={food}/>)
          })}
    </div>
  </div>;
}

export default App;