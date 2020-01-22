import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import foods from './foods.json'
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < FoodBox />
      </div>
    );
  }
}

export default App;
