import React, { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import FoodBox from './components/FoodBox/FoodBox';
import './App.css';
import foods from './foods.json';
import SelectedFood from './components/SelectedFood/SelectedFood';

function App() {
  console.log(foods);
  const [allFoods, setFoods] = useState(foods);
  const [searchField, setSearchField] = useState('');
  const [selectedFood, setSelectedFood] = useState([]);

  console.log('selectedFood', selectedFood);

  const filteredFoods = allFoods.filter((food) => {
    return food.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const arrayOfSelectedFoods = [];

  const handleClick = (e) => {
    const foodsArraySelection = {
      element: e.target.parentNode.parentNode.parentNode.parentNode.innerHTML,
    };
    setSelectedFood((prevState) => prevState.push(foodsArraySelection));
  };

  return (
    <div className="container">
      <SearchBox handleChange={handleChange} />
      <div class="main-container">
        <FoodBox foods={filteredFoods} handleOnClick={handleClick} />
        <SelectedFood foodSelected={selectedFood}></SelectedFood>
      </div>
    </div>
  );
}

export default App;
