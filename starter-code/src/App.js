import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
        foods: foods
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          this.state.foods.map((food,i)=> (
            <FoodBox {...food} />

          ))
        }
      </div>
    );
  }
}

export default App;
