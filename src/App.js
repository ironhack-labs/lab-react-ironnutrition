import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import 'bulma/css/bulma.css';




function App() {
  const [foodList, setFoodList] =  useState (foods);
  const displayFoodbox = foodList.map((food, index) => (
    <FoodBox {...food} key={index}/>


  ))
  return (
    <div className="App">
    {displayFoodbox}


    </div>
  );
}

export default App;
