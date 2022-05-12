import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json'
import FoodBox from './components/FoodBox';
import { useState } from "react";

function App() {

  const [foods, setFoods] = useState(foodsArr);
  console.log(foodsArr);
  
  return (
    <div className="App">

     <h2>List of foods in our app:</h2>
            {foods.map((element) => {
                            return (<FoodBox food={element}/>)
                                    }
                            )}

    </div>
  )
}

export default App;
