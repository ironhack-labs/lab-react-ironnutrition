import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      <FoodList foods={foods}></FoodList>
    </div>
  );
}

export default App;
