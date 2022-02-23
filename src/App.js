import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import Todays from './components/Todays';

function App() {
  const [food, setFoods] = useState(foods);

  const [nameInput, setNameInput] = useState('food name');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [imageInput, setImageInput] = useState('imgUrl');

  const [searchInput, setSearch] = useState('');

  const [calArr, setCalArr] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: nameInput,
      calories: caloriesInput,
      image: imageInput,
    };
    setFoods([newFood, ...food]);
    // setNameInput('');
  };

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handleCaloriesInput = (e) => {
    setCaloriesInput(e.target.value);
  };

  const handleImageInput = (e) => {
    setImageInput(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let foodCopy = [...foods];
    let searchString = searchInput.toLowerCase();
    let searchResult = foodCopy.filter((element) => {
      return element.name.toLowerCase().includes(searchString);
    });
    console.log(searchResult);
    setFoods(searchResult);
  };

  return (
    <div className="App">
      <AddFood
        submitFood={handleSubmit}
        currentName={nameInput}
        currentCalories={caloriesInput}
        currentImage={imageInput}
        addName={handleNameInput}
        addCalories={handleCaloriesInput}
        addImage={handleImageInput}
      />
      <Search handleSearch={handleSearch} />

      <div className="twoPanels">
        <div className="left">
          {food.map((foods, index) => {
            return <FoodBox key={index} foodsArr={foods} />;
          })}
        </div>

        <div className="right">
          <Todays />
        </div>
      </div>
    </div>
  );
}

export default App;
