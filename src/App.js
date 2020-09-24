import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './FoodBox';

function App() {
  return (
    <div className="App">
      <Foodbox />
    </div>
  );
}

export default App;
