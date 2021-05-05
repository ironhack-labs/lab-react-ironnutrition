import React from 'react';
import foods from './foods.json';
import Foods from './components/FoodBox/FoodBox';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Foods/>
    </div>
  );
}

export default App;
