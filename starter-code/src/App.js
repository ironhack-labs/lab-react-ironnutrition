import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import './App.css';
import { FoodBox } from './components/index.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods
    }
  }
  addFood = (name, cal, url) => {
    const newItem = {
      "name": name,
      "calories": cal,
      "image": url,
      "quantity": 0,
    }
    let state = this.state
    state.foods.push(newItem)
    this.setState(state)
  }
  render() {
    return (
      <div className="App">
        <FoodBox food={foods} addFood={this.addFood} />
      </div>
    );
  }
}

export default App;
