import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox"
import AddFood from "./components/AddFood"

function App() {

  const [foodList, setFoodList] = useState(foods);

  const handleAddFood = foodObject => setFoodList([...foodList,foodObject])

  return (
    <div className="App">
      <AddFood handleAddFood={handleAddFood} />
      <FoodBox foodData={foodList} />

    </div>
  );
}

export default App;
