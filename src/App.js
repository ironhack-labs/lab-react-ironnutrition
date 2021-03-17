import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import JSONfoods from './foods.json';
import FoodBox from './components/FoodBox'


function App() {
  return (
    <div className="App">
      <FoodBox />
    </div>
  );
}

export default App;
