import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodList from './Components/FoodList';
import NewFood from './Components/NewFood';

function App() {
  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;
