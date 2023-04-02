import './App.css';
import foods from "./foods.json";
import React, { useState } from 'react';
import SimpleList from './components/SimpleList';
import FoodBox from './components/FoodBox';
import AddFoodForm from './AddFoodForm';

function App() {
  const [allFoods, setAllFoods] = useState(foods)

  return (
    <div>
      <SimpleList allFoods={allFoods}/>
      
      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
    </div>
  );
}

export default App;
