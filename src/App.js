import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import NewFoodForm from './components/NewFoodForm'
import Searchbar from './components/Searchbar'
import {useState} from "react";

function App() {
  
  let foodArr = foods;

  const [updatedFoodArr, setNewFoodArr ] = useState([...foodArr])

  

  console.log(foodArr.length);
  console.log("New food arr", updatedFoodArr)

  return (
    <div className="App">
    
    <NewFoodForm foodArr={updatedFoodArr} setNewFoodArr={setNewFoodArr}/>
    <Searchbar foodArr={updatedFoodArr} setNewFoodArr={setNewFoodArr}/>
    {updatedFoodArr.map((food, index) => {
      return (
         <Foodbox
           key={index}
           img={food.image}
           food={food.name}
           cals={food.calories}

         />
      )
    })}
     
    </div>
  );
}

export default App;
