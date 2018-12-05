import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import NewButton from './NewButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewButton />
        <FoodBox />
      </div>
    );
  }
}

export default App;
