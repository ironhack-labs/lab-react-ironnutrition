import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import food from './foods.json'
import FoodBox from './FoodBox'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allFood: food
    }
  }

  render() {
    console.log(this.state.allFood);
    const eachFood = this.state.allFood.map((food, index)=>{
      return <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} />
    });

    return (
      <div className="App">
        <h1>Nutri</h1>
        {eachFood}

      </div>
    );
  }
}

export default App;
