import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './components/Foodbox/Foodbox'
import './components/Foodbox/Foodbox.css';
import Form from './components/Form/Form'

let foodList= foods;

class App extends Component {
  constructor(){
    super();
    this.state = {food:foodList}
  }
  addFood=() => {
    // this.setState({
    //   ...this.state,food
    // })
  }
  render() {
    return (
      <div>
      <h1>IronNutrition</h1>
      <input type="text"/>
      {this.state.food.map(foods => {
            
            return (
              <Foodbox {...foods} />
              
            )
          })}
      <button onclick={this.addFood}>Add Food</button>
      <Form/>
      </div>
    );
  }
}

export default App;
