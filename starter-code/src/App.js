import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      {foods.map(item => <FoodBox name={item.name} calories={item.calories} image={item.image} quantity={item.quantity}/>)}
      </div>
    );
  }
}

export default App;
