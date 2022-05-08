import React, { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchFoods from './components/SearchFoods';

function App() {

  const [foodArray, setFoodArray] = useState(foodsData);

  const [filteredFoodArray, setFilteredFoodArray] = useState(foodsData);

  // const [foodListArray, setFoodListArray] = useState(foodsData);
  // add function that adds foods from add button to food list then updates the state.

  // ALT SYNTAX addFoodToFoodArray = foodObject => setFoodArray([...foodArray, foodObject]);
  const addFoodToFoodArray = foodObject => {
      const copyFoodArray = [...foodArray];
//ALT SYNTAX copyFoodArray = [...foodArray, foodObject];
//ALT SYNTAX setFoodArray([...foodArray, foodObject]);
      copyFoodArray.push(foodObject);

      setFoodArray(copyFoodArray);

  }

  const filterFoodsByString = stringToSearch => {
   const filteredFoods = foodArray.filter(foodElement => {
      return foodElement.name.toLowerCase().includes(stringToSearch.toLowerCase());
    });

    setFilteredFoodArray(filteredFoods);
  }

  return (
    <div className='App'>
    <AddFood handleAddFood={addFoodToFoodArray} />
    <SearchFoods handleSearch={filterFoodsByString} />
    {filteredFoodArray.map((foodElement, index) => {
      return <FoodBox  food={foodElement} key={index} />;
    })}

    </div>
  );
}

export default App;
