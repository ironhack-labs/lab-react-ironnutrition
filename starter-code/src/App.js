import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './Component/FoodBox/FoodBox'
import foods from './foods.json'

class App extends Component {


  render() {

    return (
      <div>
      {foods.map(food => {
        return  <FoodBox {...food} ></FoodBox>
      })
    }
    </div>
    )
  }
}

export default App;
