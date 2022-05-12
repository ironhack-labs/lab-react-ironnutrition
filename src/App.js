import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox';
import foods from './foods.json';
import { useState } from 'react';
import Controller from './Components/Controller';
import Search from './Components/Search';


function App() {
  const [food, setFood] = useState(foods);
  const [showFood, setShowFood] = useState({})

const addNewFood=(newFood)=>{
  setFood(preFood=>{
    return [newFood, ...preFood];
  })
}
const showOrder=(newFood)=>{
  setShowFood(preFood=>{
    return [newFood, ...preFood];
  })
}

  return (
    <div className="App">
      <Controller addNewFood={addNewFood} />
      <Search foods={food} setFood={setFood} />

      <ul>food
      <li>is {showOrder} </li>
      </ul>
     
      {food.map((fd,i)=><FoodBox key={i} setShowFood={setShowFood} setFood={setFood} foods={fd} />  
      )}
     
    </div>
  );
}

export default App;
