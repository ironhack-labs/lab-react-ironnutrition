import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';
import TodaysItem from './components/TodaysItem/TodaysItem';

const App = () => {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [itemList, setItems] = useState([]);

  const showHideForm = () => {
    setShowForm(!showForm);
  };

  const filterFoods = (input) => {
    setFoodList(
      [...foods].filter((element) => {
        return element.name.toLowerCase().includes(input.toLowerCase());
      })
    );
  };

  const addToday = () => {
    
  }

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div class="nav">
        <div>
          <button onClick={showHideForm}>Add New Foods</button>
          {showForm ? (
            <Form
              foodList={foodList}
              setFoodList={setFoodList}
              showHideForm={showHideForm}
            />
          ) : (
            ''
          )}
        </div>
        <div>
          <SearchBar filterFoods={filterFoods} />
        </div>
      </div>
      <div class="lists">
        <div class="boxes">
          {foodList.map((element) => {
            return (
              <FoodBox
                name={element.name}
                calories={element.calories}
                image={element.image}
                key={element.name}
              />
            );
          })}
        </div>
        <div class="today">
          <h2>Today's Foods</h2>
          <ul>
            <TodaysItem />
          </ul>
          <p>Total: 0 cal</p>
        </div>
      </div>
    </div>
  );
};

export default App;
