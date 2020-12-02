import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';

import './App.css';
import foodsSrc from '../foods.json';

import FoodBox from './FoodBox';
import NewFood from './NewFood';
import Search from './Search';
import ConsumedFoods from './ConsumedFoods';

function App() {
  const [foods, setFoods] = useState([...foodsSrc]);
  const [foodsBkp, setFoodsBkp] = useState([...foodsSrc]);

  const [toggleForm, setToggleForm] = useState(false);

  const [todaysFoods, setTodaysFoods] = useState([]);

  function filterFoods(term) {
    const foodsCopy = [...foods];

    const filteredArr = foodsCopy.filter((food) => {
      return food.name.toLowerCase().includes(term.toLowerCase());
    });

    setFoodsBkp(filteredArr);
  }

  function addTodayFood(food) {
    const foodsCopy = [...todaysFoods];

    foodsCopy.push(food);

    setTodaysFoods([...foodsCopy]);
  }

  return (
    <div className="container">
      <h1 className="title is-1">IronNutrition</h1>
      <Search filterFoods={filterFoods} />
      <div className="columns">
        <div className="column is-three-quarters">
          {foodsBkp.map((food, i) => (
            <FoodBox
              key={i}
              image={food.image}
              name={food.name}
              calories={food.calories}
              addTodayFood={addTodayFood}
            />
          ))}
        </div>
        <div className="column">
          <ConsumedFoods todaysFoods={todaysFoods} />

          {toggleForm ? (
            <NewFood
              foods={foods}
              setFoods={setFoods}
              setFoodsBkp={setFoodsBkp}
              setToggleForm={setToggleForm}
            />
          ) : (
            <button
              onClick={() => setToggleForm(!toggleForm)}
              className="button is-primary"
            >
              New Food
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
