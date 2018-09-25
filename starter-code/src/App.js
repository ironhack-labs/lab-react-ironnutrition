import React, { Component } from 'react';
import './App.css';

import FoodList from './components/FoodList/FoodList';

import 'bulma/css/bulma.css';
import foods from './foods.json';

class App extends Component {

  state = {
    foodList: foods.slice()
  };

  render() {
    return (
        <FoodList foods={ this.state.foodList.slice() }/>
    );
  }
}

export default App;
