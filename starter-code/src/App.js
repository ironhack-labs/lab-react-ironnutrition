import React, { Component } from 'react';
import logo from './logo.svg';
//CSS
import './App.css';
import 'bulma/css/bulma.css';
//Data
import foods from './foods.json'
//Components
import Foodbox from './components/foodbox';

class App extends Component {
  state = {
    foods: foods
  }
  render() {
    return (
      <div className ="App">
        {this.state.foods.map((element,key) =>
          <Foodbox 
          key = {key}
          name = {element.name}
          calories = {element.calories}
          image={element.image}
          quantity={element.quantity}
          />
          )}
      </div>
    );
  }
}

export default App;
