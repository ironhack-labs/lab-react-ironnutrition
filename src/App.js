import React from 'react';
import './App.css';
import FoodList from './components/FoodList';
import NewProduct from './components/forms/NewProduct';
import foods from './foods.json'

function App() {
  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <FoodList foods={foods}/>
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
          <hr />
          <NewProduct foods={foods}/>
        </div>
      </div>
    </div>
  );
}

export default App;
