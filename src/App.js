import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/addNewFood';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';

function App() {
  const [foods, setFoods] = useState(foodsArr);
  
  const addNewFood = (newFood) => {
    setFoods((prevFood) => {
      return [...prevFood, newFood];
    });
  };

  const [todaysFood, setTodaysFood] = useState([]);

  const addTodaysFood = (selectedFood) => {
      setTodaysFood(prevFood => [...prevFood, selectedFood]);
    }

  return (
    <div className="App">
      <div>
        <br></br>
        <span>Search Food</span>
        <Search food={foodsArr} setFoods={setFoods} />
        <hr></hr>
        <AddNewFood addFood={addNewFood} />
        <hr></hr>
      </div>
      <section className="mainArea">
        <div className="foodList">
          <FoodBox listOfFoods={foods} addTodaysFood={addTodaysFood}/>
        </div>
        <div className="selectedFoods">
          <h1>Today's Foods</h1>
          <TodaysFood todaysFood={todaysFood}/>
          <span>Total Calories: </span>
        </div>
      </section>
    </div>
  );
}

export default App;
