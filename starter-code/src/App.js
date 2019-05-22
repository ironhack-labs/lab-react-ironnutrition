import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodList from './components/FoodList'

class App extends Component {
  state = {
    foods: foods.map(item => item)
  }
  render() {
    return (
      <div className="App">
        <FoodList foods={this.state.foods}/>
      </div>
    );
  }
}

export default App;
