import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
//import FoodForm from './components/FoodForm'
import SearchFood from './components/SearchFood'
import AddFoodBTN from './components/AddFoodBTN'
import 'bulma/css/bulma.css';




function App() {
  const [foodList, setFoodList] =  useState (foods);
  const displayFoodbox = foodList.map((food, index) => (
    <FoodBox {...food} key={index}/>


  ))
  return (
    <div className="App">
    <SearchFood/>
    <AddFoodBTN/>
    {displayFoodbox}


    </div>
  );
}

export default App;
