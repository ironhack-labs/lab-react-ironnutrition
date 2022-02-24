import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from "./components/FoodBox"
import foods from './foods.json';
import Search from "./components/Search"

function App() {
  return (
    <div>

      <Search />
      <FoodBox foodsArr = {foods}/>
    </div>
      
  );
}

export default App;
