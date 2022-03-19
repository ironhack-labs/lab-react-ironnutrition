//jshint esversion:8

import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import allFoodData from './foods.json';
import { FoodBox } from './components/FoodBox';
import { useState } from 'react';
import { AddNewFood } from './components/AddNewFood';
import { Search } from './components/Search';


function App() {
  let [foods, setFoods] = useState(allFoodData);
  let [foodsData, setFoodsData] = useState(allFoodData);
  let [showForm, setShowFrom] = useState(false);
  let [selecteds, setSelecteds] = useState([]);
  let [anySelected, setAnySelected] = useState(false);
  let total = 0;

  const addFood = (food) => {
    const updatedFoods = [...foods, food];
    setFoods(updatedFoods);
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
    } else {
      filteredFoods = foodsData.filter((food) => {
        return food.name.toLocaleLowerCase().includes(str.toLocaleLowerCase());
      });
    }
    setFoods(filteredFoods);
  };

  const selectedFood = (food) => {
    let selectedFoods;
    selectedFoods = [...selecteds, food];

    setSelecteds(selectedFoods);
    setAnySelected(true);
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
              <FoodBox
                key={index.toString()}
                food={food}
                addSelectedFood={selectedFood}
              />
            );
          })}
          {showForm && <AddNewFood handleAddFood={addFood} />}

          <button onClick={handleShowForm}>
            {showForm ? 'Hide Form' : 'Show Form'}
          </button>
        </div>

        <div className="column">

          {anySelected &&
            selecteds.map((food) => {
              total += parseInt(food.calories) * parseInt(food.quantity);

              return (
                <div>
                  <span>{food.quantity} {food.name} = {food.calories * food.quantity} cal</span> 
                </div>
              );
            })}

          <div>Total: {total}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
