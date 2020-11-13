import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import NewFood from './NewFood/NewFood';
import Search from './Search/Search';

function App() {
  const [state, setState] = useState(foods);

  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <Search list={state} setSearch={setState} />

      <div className="columns">
        <div className="column">
          {state.map((element) => (
            <FoodBox
              image={element.image}
              name={element.name}
              cal={element.calories}
            />
          ))}
        </div>
        <div style={{ width: '600px' }}>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              <li>1 Pizza = 400 cal</li>
              <li>2 Salad = 300 cal</li>
            </ul>
            <strong>Total: 700 cal</strong>
          </div>
          <div className="column content">
            <h2 className="subtitle">Add new food</h2>
            <NewFood foods={state} setFoods={setState} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
