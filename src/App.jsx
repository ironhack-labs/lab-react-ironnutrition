import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/FoodBox';


function App() {
  return (
    <div className="App">
      <FoodBox />
    </div>
  );
}

export default App;
