import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBoxDynamics from'./components/FoodBoxDynamic'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <FoodBoxDynamics/>
      </div>
    );
  }
}

export default App;
