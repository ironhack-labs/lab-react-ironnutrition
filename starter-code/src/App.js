import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox foods={foods}/>
      </div>
    );
  }
}

export default App;
