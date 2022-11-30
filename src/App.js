// src/App.js
import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import AddFoodForm  from './components/AddFoodForm';
import { v4 as uuidv4 } from "uuid"

function App() {
  const [food,setFood] = useState(foods)
 
  return (
    <div>
     <AddFoodForm  food={food} setFood={setFood}/>
      {food.map((elm) => {
        return (
          <div>
            <FoodBox food={elm} />
            
    </div>
          
        );
      })}
    </div>
  );
}

export default App;
