import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';


class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods
    };
  }
  render() {
    console.log(this.state.foods);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div id="allFoods">
          {this.state.foods.map((e,i)=>{
            return(
            <FoodBox
            key = {e.name}
            name = {e.name}
            calories = {e.calories}
            image = {e.image}
            />)
          })}
        </div>
        
      </div>
    );
  }
}

export default App;
