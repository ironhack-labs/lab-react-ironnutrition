import React from 'react';
import './App.css';
import foodsArray from './foods.json';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  
  const [displayForm, setDisplayForm] = useState(false);
  const [foods, setFoods] = useState(foodsArray);
  const [displayFoods, setDisplayFoods] = useState(foodsArray);
  const [selectedFoods, setSelectedFoods] = useState([]);

  function toggleFormDisplay() {
    setDisplayForm(!displayForm);
  }

  function addFood(newFood) {
    setFoods([newFood, ...foods]);
  }
  
  function filterByName(subString) {
    if (subString !== '') {
      const filteredFoods = [...foods].filter(food => {
        const lowerCaseName = food.name.toLowerCase();
        return lowerCaseName.includes(subString.toLowerCase());
      })
      setDisplayFoods(filteredFoods);
    } else {
      setDisplayFoods(foods);
    }
  }

  // function updateFoodQuantity(foodName, value) {
  //   setFoods((prevFoods) => {
  //     prevFoods.forEach((food) => {
  //       if (food.name === foodName) food.quantity = value;
  //     })
  //   })
  //   console.log("foods: ", foods);
  // }

  function selectFood(newFood) {

    if (selectedFoods.some(food => food.name === newFood.name)) {
      
      setSelectedFoods((currentSelection) => {
        const arrayCopy = [...selectedFoods];
        arrayCopy.forEach(food => {
          if (food.name === newFood.name) food.quantity += newFood.quantity;
        });
        return arrayCopy;
      })
    } else {
      setSelectedFoods((currentSelection) => [...currentSelection, newFood])
    }
  }

  function unselectFood(foodName) {
    setSelectedFoods((currentSelection) => currentSelection.filter((food) => food.name !== foodName));
  }

  return (
    <div className="App">
      
      <Header 
        filterByName={ filterByName } 
        displayForm={ displayForm } 
        toggleFormDisplay={ toggleFormDisplay } 
        addFood={ addFood } 
      />

      <Main 
        foods={ displayFoods }
        selectFood = { selectFood }
        selectedFoods={ selectedFoods }
        unselectFood={ unselectFood }
      />
      
    </div>
  );
}

export default App;
