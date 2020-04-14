import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './Components/FoodBox/FoodBox';
import AddFood from './Components/AddFood/AddFood.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFood />
           
      </div>
    );
  }
}

export default App;
