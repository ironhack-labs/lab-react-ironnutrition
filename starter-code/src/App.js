import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox.js';
import AddFood from './components/addFood/AddFood.js';
import Search from './components/search/Search.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      foods: foods
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(array) {
    this.setState({
      foods: array
    })
  }

  render() {
    return (
      <div>
        <AddFood foodArray={this.state.foods} updateState={this.updateState}/>
        <Search  foodArray={this.state.foods} updateState={this.updateState}/>
        <FoodBox foodArray={this.state.foods}/>
      </div>
    );
  }
}

export default App;
