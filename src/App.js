import React from 'react';

import FoodList from "./components/FoodList"
import FoodBox from "./components/FoodBox"
import foodsData from "./foods.json"


import './App.css';

function App() {
  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;
