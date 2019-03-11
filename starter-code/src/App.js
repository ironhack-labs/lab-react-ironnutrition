import React, { Component } from 'react';
import foods from './foods.json'
import './App.css';
import FoodBox from './components/FoodBox'
import SearchBar from './components/SearchBar'

class App extends Component {

  render() {
    return (
      <div className="App">
        <FoodBox />
      </div>
    );
  }
}

export default App;
