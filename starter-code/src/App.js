import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodies from './foods.json'
import FoodModel from './foodModel.js'
import addFood from './addFood.js'

class App extends Component {
  state = {
    foodies: foodies,
    newMeal: addFood
  }

  AddMeal = ()=>{
    let foodList = [...this.state.foodies];
    foodList.push(this.state.newMeal)
    this.setState({foodies: foodList })
  }

  render() {
    return (
      <div className="box">
      <button onClick={this.AddMeal}>Add meal to list</button>
      {this.state.foodies.map((food, index)=> (
 <FoodModel
    quantity={food.quantity}
    name = {food.name} 
    calories={food.popularity}
    image={food.image} 
    // deleteThisContact = {this.deleteContact}

 />
 ))}
 </div>
   );
  }
}

export default App;
