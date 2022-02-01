import React, { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import FoodBox from './components/FoodBox/FoodBox';
import './App.css';
import foods from './foods.json';
import SelectedFood from './components/SelectedFood/SelectedFood';
import AddNewFood from './components/AddNewFood/AddNewFood';

function App() {
  console.log(foods);
  const [allFoods, setFoods] = useState(foods);
  const [foodsData, setFoodData] = useState(foods);
  const [searchField, setSearchField] = useState('');

  const filteredFoods = foodsData.filter((food) => {
    return food.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleClick = (e) => {
    const foodsArraySelection = {
      element: e.target.parentNode.parentNode.parentNode.parentNode.innerHTML,
    };
  };

  const addNewFood = (newFood) => {
    console.log('NEWFOOD IN APPJS', newFood);
    const updatedAllFoods = [...allFoods, newFood];
    const updatedFoodsData = [...foodsData, newFood];
    setFoods(updatedAllFoods);
    setFoodData(updatedFoodsData);

    console.log('FOODSDATA AFTER ADDING NEW FOOW', foodsData);
  };

  return (
    <div className="container">
      <SearchBox handleChange={handleChange} />
      <AddNewFood addNewFood={addNewFood}></AddNewFood>
      <div className="main-container">
        <FoodBox foods={filteredFoods} handleOnClick={handleClick} />
        <SelectedFood></SelectedFood>
      </div>
    </div>
  );
}

export default App;
