import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from "./foods.json"
import 'bulma/css/bulma.css';
import { FoodBox } from './components/foodbox'


class App extends Component {
  render() {
    let allFoods = foods.map((e) => { // Mostrar todos los alimentos
      return  <FoodBox key={e.name} {...e} />
    })
    return (
      <div>
        <button>Add Food</button>
        {allFoods}
      </div>
    )
  }
};

export default App;
