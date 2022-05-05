import React from 'react';
import { useState } from "react";
import 'bulma/css/bulma.css';
import './App.css';
import foodDataJSON from './foods.json';

import FoodBox    from './components/FoodBox'
import AddFood    from './components/AddFood'
import SearchBox  from './components/SearchBox'
import TodaysFood from './components/TodaysFood'

let genKey = 0;
// foodDataJSON.map(x =>{ x.inList = false; x.id = x.name.substring(0,1)+genKey; genKey++; return x});
foodDataJSON.map(x =>{ x.id = x.name.substring(0,1)+genKey; genKey++; return x});

function App() {

  const [ foodData,setFoodData ] = useState(foodDataJSON);
  const [ foods,   setFoods    ] = useState(foodDataJSON);

  const addNewFood = (newFood) => {
    newFood.id = newFood.name.substring(0,1)+genKey;
    newFood.inList = false;
    const updatedFoods = [...foodData, newFood];

    setFoods(updatedFoods);
    setFoodData(updatedFoods);
  }  

  const searchFoodList = (q) => {
    const newFoodList = (q === '' ? foodData : foodData.filter(f=>f.name.toLowerCase().includes(q)))
    setFoods(newFoodList);
  }

  const addFoodList = (e,n) => { 
    // foods.map( f => { (f.id === e){ f.quantity=e; f.inList = true; }  } )
    const newFoods = foods.filter( f => { if(f.id === e) f.quantity=n; return f } )
    setFoods(newFoods);
    setFoodData(newFoods);
  }
  
  return (
    <div className="app">
      <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title">IronNutrition</h1>
        </div>
        <div className="column">
          <AddFood addFood={addNewFood}/>
        </div>
      </div>
        <div>
          <SearchBox foodSearch={searchFoodList}/>
        </div>
        <div className="columns">
          <div className="column">
            {foods.map((food,index)=><FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} key={food.id} id={food.id} plusBtn={addFoodList}/>)}
          </div>
            <TodaysFood foodList={foods} removeFood={addFoodList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
