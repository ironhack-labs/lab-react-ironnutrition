import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import { useState } from 'react';
import CaloriesBox from './components/CaloriesBox';
import Searchbar from './components/Searchbar';

function App() {
  const immutableFoods = foods;
  const [filteredArr, setFilteredArr] = useState(immutableFoods);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const searchHandler = (data) => {
    const filteredCopy = immutableFoods.filter((single) =>
      single.name.toLowerCase().includes(data.toLowerCase())
    );
    setFilteredArr(filteredCopy);
  };
  const submitFoodHandler = (foodObj) => {
    setSelectedFoods((prevState) => [...prevState, foodObj]);
  };
  return (
    <div>
      <h1>Ironhack Nutrion Lab</h1>
      <Searchbar onSearchInput={searchHandler}></Searchbar>
      <div className="float-left">
        {filteredArr.map((food) => (
          <FoodBox
            onSubmitCall={submitFoodHandler}
            key={Math.random()}
            food={food}
          ></FoodBox>
        ))}
      </div>
      <div className="float-right">
        <h1>you have selected the following items!</h1>
        {selectedFoods.map((single) => (
          <CaloriesBox key={Math.random()} food={single}></CaloriesBox>
        ))}
      </div>
    </div>
  );
}

export default App;
