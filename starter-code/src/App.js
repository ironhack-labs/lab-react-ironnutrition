import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import './App.css';
import FoodBox from './component/FoodBox'
import CreateFood from './component/CreateFood'

class App extends Component {
  render() {
    return (

      <div className="App">

      <CreateFood />

      {foods.map((food) => {
        return (
          <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}></FoodBox>
        )
      })}
    </div >

    );
  }
}

export default App;