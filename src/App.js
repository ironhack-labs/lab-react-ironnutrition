import React, { Component } from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodCard from './components/FoodCards/FoodCard';

class App extends Component {
  state = {
    foods: [...foodsJSON]
  }

  render() {
    const { foods } = this.state
    return (
      <div className="App">
        <FoodCard foods={foods} />
      </div>
    );
  }
}

export default App;
