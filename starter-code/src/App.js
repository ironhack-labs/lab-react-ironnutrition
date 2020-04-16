import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox.js';
import foods from './foods.json';

class App extends Component {

  state = {
    food: foods
  }

  render() {
    return (
      <div className="App">
        {this.state.food.map((item, index) => (
          <FoodBox
            key={index}
            name={item.name}
            calories={item.calories}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
      </div>
    );
  }
}

  export default App;
