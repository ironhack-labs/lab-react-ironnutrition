import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox/FoodBox';
import Food from "./foods.json";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        foods: Food.map(food => {
          return <FoodBox {...food} />
        })
    }
}
  render() {
    return (
      <div className="App">
      {this.state.foods}
      </div>
    );
  }
}

export default App;
