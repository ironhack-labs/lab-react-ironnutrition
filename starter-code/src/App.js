import React, { Component } from 'react';

import './App.css';

import foods from './foods.json'
import FoodBox from './components/FoodBox'

class App extends Component {

  constructor () {
    super()
    this.state = {
      listOfFood: foods
      
    }

  }

  handlerInputQuantity = (e) => {
    // const newState = [...this.state.listOfFood]
    this.setState ({
      quantity: e.target.value
    })
  }

  render() {
    return (
      <div className="box">

         {
           this.state.listOfFood.map((elm, idx) => {
              return (
                <FoodBox key={idx} name={elm.name} calories={elm.calories} image={elm.image} quantity={elm.quantity} changeQuantity={(e) => this.handlerInputQuantity(e)}/>
              )
           })
         }
      </div>
    );
  }
}

export default App;
