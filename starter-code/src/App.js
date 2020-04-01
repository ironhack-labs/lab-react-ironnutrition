import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'


class App extends React.Component {
  constructor() {
    super()
    let foodList = [...foods]
    this.state = {
      foodList: foodList
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>

        <div className="App-intro">
          <FoodBox
          foodList={this.state.foodList} />
        </div>
      </div>
    );
  }
}

export default App;
