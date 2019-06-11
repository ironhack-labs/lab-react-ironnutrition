import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './components/Foodbox'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>IronNutrition</h1>
          </header>
        < Foodbox />
      </div>
    );
  }
}

export default App;
