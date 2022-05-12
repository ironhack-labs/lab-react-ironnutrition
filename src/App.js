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
  const [showFood, setShowFood] = useState([])

const addNewFood=(newFood)=>{
  setFood(preFood=>{
    return [newFood, ...preFood];
  })
}
  return (
    <div className="App">
      <Controller addNewFood={addNewFood} />
      <Search foods={food} setFood={setFood} />
      <ul>food
     
     
      {food.map((fd,i)=>{ 
        return(
          <>
          <li>is {fd.quantity}</li>
          <FoodBox key={i} setShowFood={setShowFood} setFood={setFood} foods={fd} />
          </>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
