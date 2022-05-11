import React from 'react';
import foodArr from "./foods.json"

import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/AddFood';
import { useState } from 'react';

function App() {

  const [foods, setFoods] = useState(foodArr);


  const createFood = (newFood) => {
    setFoods((prevFoods) => {
      return [newFood, ...prevFoods];
    })
  }

  return (

    
    <>
        <AddFood createFood={createFood}/>

      {foods.map((element) => {
        return (
          <Foodbox
            name={element.name}
            calories={element.calories}
            image={element.image}
            quantity={element.quantity}
          />
        )
      })
      }
      
    </>
  )
}

export default App;
