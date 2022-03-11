import React from 'react';
import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import jsonFoods from './foods.json';
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import Search from "./components/Search";
import TodaysFood from "./components/TodaysFood";
import 'bulma/css/bulma.css';

function App() {
  const [ foods, setFoods ] = useState(jsonFoods);
  const [ allFoods, setAllFoods ] = useState(jsonFoods);
  const [ showForm, setShowForm ] = useState(false);
  const [showTodaysFood, setShowTodaysFood ] = useState(false);

  function addNewFood (food) {
    setFoods(foods => [...foods, food]);
    setAllFoods(allFoods => [...allFoods, food]);
  }

  function displayForm() {
    setShowForm(!showForm);
  }

  function search(searchInput) {
      const foodsCopy = [...allFoods];
      const searchResults = foodsCopy.filter(e => e.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
      console.log("search results :", searchResults);
      setFoods(searchResults);
    }

  function setQuantity(inputFood, inputQty) {
      setFoods((prevFoods)=> {
        return prevFoods.map(food => {
          if (inputFood === food.name) food.quantity = inputQty;
          return food;
        });
      });
      setShowTodaysFood(()=>{
        const selectedFoods = foods.filter(food => food.quantity > 0);
        return selectedFoods.length > 0;
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1><b>Ironnutrition</b></h1>
      <Search search={search}/>
      <button onClick={displayForm}>Add new food</button>
      {showForm && <AddFood addNewFood={addNewFood} displayForm={displayForm}/>}

      <div className="columns">
        <div className="column">
            {foods.map(food => {
              return (
                <FoodBox key={food.image} food={food} setQuantity={setQuantity}/>
              )
            })}
            <h3>Today's Food</h3>
        </div>
        <div className="column">
            {showTodaysFood && <TodaysFood foods={allFoods}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
