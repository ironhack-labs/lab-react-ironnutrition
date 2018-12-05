import React, { Component } from 'react';
import './App.css';
import './foods.json'
import 'bulma/css/bulma.css';
import foods from "./foods.json"
import FoodBox from './components/foodBox/FoodBox.js'
import Form from './components/form/Form'

let foodsCreated = foods;


class App extends Component {
  constructor() {
    super();
    this.state = {
        foods: foodsCreated
        }
 
  }

  submitHandler=(state) => {
    console.log(state)
  }
  render() {
    return (
      <div className="App">
       
        <Form submitHandler={this.submitHandler()}/>

        { this.state.foods.map((food,index) => 
         <FoodBox key={index} image={food.image}  name={food.name} calories={food.calories} quantity = {food.quantity}  />) 
      }
      </div>
    );
  }

}

export default App;

