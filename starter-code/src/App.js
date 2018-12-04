import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox.js'
let foodsCreated = foods;
class App extends Component {
  constructor() {
    super();
    this.state = {
        foods: foodsCreated
    }
  }
  render() {
    return (
      <div className="App">
       
        { this.state.foods.map((food,index) => 
         <FoodBox key={index} image={food.image}  name={food.name} calories={food.calories} quantity = {food.quantity}  />) 
      }
      </div>
    );
  }

}
export default App;
