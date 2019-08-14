import React, { Component } from 'react';

import './App.css';

import foods from './foods.json'
import FoodBox from './components/FoodBox'
import Formulario from './components/Formulario'

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

  addOneFood = foods => {

    const newState = [...this.state.listOfFood]
    newState.push(foods)
  
    this.setState({
        listOfFood: newState
    })
}


  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="box col-6">

         {
           this.state.listOfFood.map((elm, idx) => {
              return (
                <FoodBox key={idx} name={elm.name} calories={elm.calories} image={elm.image} quantity={elm.quantity} changeQuantity={(e) => this.handlerInputQuantity(e)}  />
              )
           })
         }
      </div>
      <div className="box col-6">
        <link></link>
        <Formulario addNewFood={this.addOneFood} />
        
      </div>
      </div>
      </div>
    );
  }
}

export default App;
