import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox.js'
import Toggable from './components/toggable/Toggable'
import CheckoutBillingForm from './components/checkoutBillingForm/CheckoutBillingForm'


class App extends Component {

  constructor() {
    super()
    this.state = {
      food: foods.map((food) => food)
    }
  }

  submitHandler = (e,state) => {
    e.preventDefault();
    console.log(state);
   
      const _food = [...this.state.food]
      _food.push(state);
      this.setState({...this.state, food:_food})
      console.log(this.state)
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggable>
          <CheckoutBillingForm submitHandler={this.submitHandler}></CheckoutBillingForm>
        </Toggable>
        {this.state.food.map(food => <FoodBox {...food} />)}

      </div>
    );
  }
}

export default App;
