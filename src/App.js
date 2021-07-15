import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css'
import Foodbox from './components/Foodbox';

import Foods from './foods.json';


//     "name": "Pizza",
//     "calories": 400,
//     "image": "https://i.imgur.com/eTmWoAN.png",
//     "quantity": 0


function App() {

let foodsList = Foods

  console.log('foodlist', foodsList)

  const [foodProps, updateFood] = useState(foodsList)

  
  return (
    <div className="App">
      A food App
       <Foodbox allFoods={foodProps}/>
    </div>
  );
}

export default App;
