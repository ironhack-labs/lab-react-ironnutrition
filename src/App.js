import './App.css';
import foods from "./foods.json";
import React, { useState } from 'react';
import SimpleList from './components/SimpleList';
import FoodBox from './components/FoodBox';

function App() {
  const [allFoods, setAllFoods] = useState(foods)
  return (
    <div>
      <SimpleList />
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
    </div>
  );
}

export default App;
