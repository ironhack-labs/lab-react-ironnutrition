import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

class App extends Component {
  // state = { 
  //   name: null,
  //   calories: null,
  //   image: null,
  //   quantity: null 
  // }
render() {
  console.log(foods)
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {
          foods.map( (foodItem, index) => (
            <FoodBox key={index} food={foodItem}/>
          ))
        }
      </div>
    );
  }
}

export default App;