import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodList from './FoodBox.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodList/>
      </div>
    );
  }
}

export default App;
