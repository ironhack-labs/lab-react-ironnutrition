//jshint esversion:9

import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import allFoodData from './foods.json';
import { useState } from 'react';

import { FoodBox } from './components/FoodBox';
import { AddNewFood } from './components/AddNewFood';
import { Search } from './components/Search';

function App() {
  let [foods, setFoods] = useState(allFoodData);
  let [foodsData, setFoodsData] = useState(allFoodData);
  let [showForm, setShowFrom] = useState(false);
  let [selecteds, setSelecteds] = useState([]);
  let [filtering, setFiltering] = useState(false);
  let totalCalories = 0;

  const addFood = (food) => {
    const updatedFoods = [...foods, food];
    setFoods(updatedFoods);
    setFoodsData(updatedFoods);
    handleShowForm();
  };

  const handleShowForm = () => {
    if (showForm) {
      setShowFrom(false);
    } else {
      setShowFrom(true);
    }
  };

  const handleFilter = (str) => {
    
    let filteredFoods;

    if (str === '') {
      filteredFoods = foodsData;
      setFiltering(false);
    } else {
      filteredFoods = foodsData.filter((food) => {
        setFiltering(true);
        return food.name.toLocaleLowerCase().includes(str.toLocaleLowerCase());
      });
    }
    setFoods(filteredFoods);
  };

  const selectedFood = (food) => {

    let todaysFood = selecteds.slice();

    const foundFood = todaysFood.find(oldFood => oldFood.name === food.name);

    food.calories *= food.quantity;

    if (foundFood) {
      foundFood.quantity += food.quantity;
      /* foundFood.calories += food.calories; */ //<= already being done down there
    } else {
      todaysFood.push(food);
    }

    setSelecteds(todaysFood);

  };

  const deleteSelected = (foodName) => {
    const filteredFood = selecteds.filter(food => food.name !== foodName);
    setSelecteds(filteredFood);
  };


  return (
    <div className="App">
      <div>
        <Search filteredFoods={handleFilter} />
      </div>

      <div className="columns">
        <div className="column">
          {foods.map((food, index) => {
            return (
              <FoodBox key={index.toString()} food={food} addSelectedFood={selectedFood} />
            );
          })}
          {showForm && <AddNewFood handleAddFood={addFood} />}

          {!filtering && <button onClick={handleShowForm}>
            {showForm?"Cancel":"Add Food"}
          </button>}
        </div>

        <div className="column">
          <h1>Today's foods</h1>

          {selecteds.length !== 0 &&
            selecteds.map((food, index) => {
              totalCalories += parseInt(food.calories) * parseInt(food.quantity);

              return (
                <div key={index.toString()}>
                  <span>{food.quantity} {food.name} = {food.calories * food.quantity} cal </span> 
                  <button onClick={() => deleteSelected(food.name)}>Delete</button>
                </div>
              );
            })}

          <div>Total Calories: {totalCalories}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
