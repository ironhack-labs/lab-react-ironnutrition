import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/foodbox/FoodBox'
import foods from './foods.json'

class App extends Component {
  render() {
    return (
      foods.map(food => {
          const {name, calories, image, quantity} = food;
          return <FoodBox name={name} calories={calories} image={image} quantity={quantity} />
      })
    );
  }
}

export default App;
