import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodForm from './components/FoodForm'
import FoodBox from './components/FoodBox'
import 'bulma/css/bulma.css';




function App() {
  
  return (
    <div className="App">
      <FoodBox/>
      <FoodForm/>


    </div>
  );
}

export default App;
