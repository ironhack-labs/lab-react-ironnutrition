import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox'


class App extends Component {

    constructor() {
      super()

      this.state = {
        foods 
      }
    }



  render() {

    return (
      <div className="foodBoxContainer">

        {this.state.foods.map(plate => <FoodBox name={plate.name} cal={plate.calories} img={plate.image} quant={plate.quantity}/>)}
      
      </div>
    );
  }
}

export default App;
