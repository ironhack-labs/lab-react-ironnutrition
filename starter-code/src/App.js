import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from'./components/FoodBox/FoodBox';
import Button from './components/Button/Button'

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
      <Button />
      </div>
    );
  }
}

export default App;
