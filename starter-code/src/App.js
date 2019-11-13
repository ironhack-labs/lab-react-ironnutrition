import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './foods.json'
import FoodBox from './Components/FoodBox'

import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  state = {
    myFoods : [...foods],
    open: false,
    todaysFoods: [],
    calTotal: 0
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronNutrition</h1>

        </header>
          
          
        <div>
        <div className="foods">
          <div className="foodOptions">
            {this.state.myFoods.map((food, index) => {
                return <FoodBox food={food} key={index} addFood={this.addFood}  />
              })}
          </div>
          
        </div>


      </div>
      </div>
    );
  }
}

export default App;
