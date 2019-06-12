import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './components/Foodbox'
import Search from './components/Search'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      foods: foods,
      allFoods: foods
    }
  }

  handleUpdateList = (input) => {
    const filteredFoods = this.state.allFoods.filter((food) => food.name.toUpperCase().includes(input.toUpperCase()))
    this.setState({foods: filteredFoods, input: input})
  }

  render() {
    return (
      <div>
        <header>
          <h1>IronNutrition</h1>
        </header>
        < Search updateList = {this.handleUpdateList} />
        < Foodbox foods = {this.state.foods} />
      </div>
    );
  }
}

export default App;
