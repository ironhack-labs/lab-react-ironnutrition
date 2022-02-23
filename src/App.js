import React from 'react';
import './App.css';
import foodsArray from './foods.json';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  
  const [displayForm, setDisplayForm] = useState(false);
  const [foods, setFoods] = useState(foodsArray);
  const [selectedFoods, setSelectedFoods] = useState([]);

  function toggleFormDisplay() {
    setDisplayForm(!displayForm);
  }

  function addFood(newFood) {
    setFoods([newFood, ...foods]);
  }
  
  function filterByName(subString) {
    if (subString !== '') {
      setFoods((prevFoods) => {
        // this will only reduce selections, not 
        return prevFoods.filter(food => food.name.includes(subString))
      });
    } else {
      // this will not take into account added foods!
      setFoods(foodsArray);
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
    setSelectedFoods((prevSelection) => [...prevSelection, newFood])
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
        foods={ foods }
        selectFood = { selectFood }
        selectedFoods={ selectedFoods }
      />
      
    </div>
  );
}

export default App;
