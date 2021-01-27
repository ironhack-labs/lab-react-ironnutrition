import React from 'react';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import SearchBox from './components/SearchBox'
import './App.css';



function App() {
  return (
    <div className="App" id="App">
    <h1>IronNutrition</h1>
    <ul id='list'>
    <SearchBox />
   {foods.map(food =>(
  <FoodBox {...food}/>))}
  </ul>
    </div>
  );
}

export default App;
