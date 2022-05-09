import './App.css';
import { useState } from 'react';

import React from 'react';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';

import AddFood from './components/AddFood';
import SearchFoods from './components/SearchFoods';

function App() {
  const [foodArray, setFoodArray] = useState(foodsData);
  const [filteredFoodArray, setFilteredFoodArray] = useState(foodsData)
  const addFoodToArray = (newFoodObject) => {
    setFoodArray([...foodArray, newFoodObject]);
  };
  const filterFoodsByString = stringToSearch =>{
  const filteredFoods =  foodArray.filter(foodElement=> {
      return foodElement.name.toLowerCase().includes(stringToSearch.toLowerCase())
    })
    setFilteredFoodArray(filteredFoods);
  }
  console.log(foodArray);

  return (
    <div className="App">
      <AddFood addFood={addFoodToArray} />
      <SearchFoods handleSearch={filterFoodsByString}/>
      {filteredFoodArray.map((foodElement, index) => {
        return <FoodBox food={foodElement} key={index} />;
      })}
    </div>
  );
}

export default App;
