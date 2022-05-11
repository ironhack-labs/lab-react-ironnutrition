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

const addNewFood=(newFood)=>{
  setFood(preFood=>{
    return [newFood, ...preFood];
  })
}
  return (
    <div className="App">
      <Controller addNewFood={addNewFood} />
      <Search foods={food} setFood={setFood} />
      <FoodBox foods={food} />
    </div>
  );
}

export default App;
