import React from 'react';
import './App.css';
import FoodList from './FoodList'
import foods from './foods.json'
import 'bulma/css/bulma.css';

function App() {
  return (
    <div>
      <FoodList />
    </div>
  );
}

export default App;
