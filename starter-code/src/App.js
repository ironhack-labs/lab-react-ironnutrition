import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './Foodbox.js';
import 'bulma/css/bulma.css';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {foods.map((e)=>{
          return <FoodBox class="column content" key={e.name} {...e}/>
        })}
        <div class="column content">
        <h2 class="subtitle">Today's food</h2>
        <ul>
          <li>1 Pizza = 400 cal</li>
          <li>2 Salad = 300 cal</li>
        </ul>
        <strong>Total: 700 cal</strong>
        </div>
      </div>
    );
  }
}

export default App;
