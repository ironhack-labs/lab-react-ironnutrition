import React, { Component } from 'react';
import './App.css';
//import foods from './foods.json'
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <FoodBox />
        </div>
    );
  }
}

export default App;
