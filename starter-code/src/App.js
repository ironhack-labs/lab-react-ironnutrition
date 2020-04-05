import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './components/Foodbox.js'

class App extends Component {

  state = {
    foods:foods
  } 

  addFood(e) {
    let foodsCopy = [...this.state.foods];
    foodsCopy.push({
      
    })
  }

  render() {
    return (
      <div className="Foodbox-container">
      {this.state.foods.map((foods) => ( 
          <Foodbox
            image={foods.image}
            name={foods.name}
            calories={foods.calories}
          />
          ))}
        </div>
    );
  }
}

export default App;
