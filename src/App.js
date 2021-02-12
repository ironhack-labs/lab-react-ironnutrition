import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Button from './components/Button/Button';

function App() {
  //console.log(foods)
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <FoodList />
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
          <Button/>
        </div>
      </div>
    </div>
  );
}

function FoodList() {
  return foods.map((value, index) => (
    <FoodBox {...value} key={value.name}></FoodBox>
  ));
}

export default App;
