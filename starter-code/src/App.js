import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from'./components/FoodBox/FoodBox';

class App extends Component {

  constructor(){
    super()

    this.state = {
      foods: foodsJSON
    }
  }

  render() {
    return (
      <div className="App">
      <FoodBox foods={[...this.state.foods]} />
      </div>
    );
  }
}

export default App;
