import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox"

function App() {

  const [foodList, setFoodList] = useState(foods)

  return (
    <div className="App">
      <FoodBox foodData={foodList} />

    </div>
  );
}

export default App;
