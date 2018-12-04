import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/foodbox/FoodBox'
import foods from './foods.json'

class App extends Component {
  constructor() {
    super();
    this.state = { food: foods }
  }
  render() {
    return (
      <div className="App">
        {this.state.food.map(piece => {
          console.log(piece)
          return (
            <FoodBox {...piece} />
          )
        })}
      </div>
    );
  }
}

export default App;
