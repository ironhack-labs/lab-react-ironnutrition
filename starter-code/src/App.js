import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bulma/css/bulma.css";
import foods from './foods.json';
import Foodbox from "./Foodbox"
import FormFood from './FormFood';

class App extends Component {
  state= {formIsActive: false, foodsCatalog: foods}
  newForm = e => {
    this.setState({formIsActive: !this.state.formIsActive})
  }

  createFood= (newFood)  => {
    const foodsCopy = [...this.state.foodsCatalog];
    foodsCopy.push(newFood); //ajouter le nouveau food
    this.setState({ foodsCatalog: foodsCopy })
}
  render() {
    return (
      <div className="App" >
      <h1>Iron Nutrition</h1> {this.state.formIsActive ? <FormFood clbk2={(newFood) => this.createFood(newFood)} clbk={this.newForm}/> : <button onClick={this.newForm}>Add new food</button>}
      <Foodbox foods={this.state.foodsCatalog}/>
      </div>
    );
  }
}

export default App;
