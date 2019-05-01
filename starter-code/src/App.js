import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';


class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: foods
    }
  }
  render() {
    return (
      this.state.foods.map(food=>{
       return <FoodBox name={food.name} calories={food.calories} image={food.image}/>
      })
    );
  }
}

export default App;
