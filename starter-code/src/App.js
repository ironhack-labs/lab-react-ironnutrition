import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/foodbox/FoodBox.js'
import AddFood from "./components/addfood/AddFood.js"
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFood />
        <FoodBox />
      </div>
    );
  }
}

export default App;
