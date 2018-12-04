import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './components/FoodBox/foodBox'

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      food:foods
    }
  }
  

  render() {
    return (
      <div className="App">
        {this.state.food.map((food,index)=> <Foodbox key={index} foodData={food}/>)}
       
      </div>
    );
  }
}

export default App;
