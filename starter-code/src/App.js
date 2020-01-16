import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import './App.css';
import { FoodBox } from './components/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox food={foods}/>
      </div>
    );
  }
}

export default App;
