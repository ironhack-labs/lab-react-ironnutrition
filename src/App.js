
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood.js'


class App extends Component {
  constructor (){
    super ()
    this.state = {
      foodItems: foods
    }
  }


  insertFood = newFood => {
        const FoodsCopy = [...this.state.foodItems]
        FoodsCopy.push(newFood)
        this.setState({ foodItems: FoodsCopy })
    }

  render () {

    return (

      <>
      {this.state.foodItems.map((elm, idx) => <FoodBox {...elm} key={idx}/>)}
      <AddFood insertFood={this.insertFood}/>
      </>
    )
  }
}

export default App;
