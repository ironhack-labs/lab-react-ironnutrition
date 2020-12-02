import React, { Component } from 'react'
import './App.css';
import FoodBox from './FoodBox'
import foods from './../foods.json'
import FoodForm from './FoodForm'


class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: foods
    }
  }
  // addOne()
  addNewFood = newFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)
    this.setState({foods: foodsCopy})
  }
  
  render() {
    return (
      <>
        <h1>Hello</h1>
        <FoodForm addNewFood={this.addNewFood} />
        {/* <button onClick={() => this.addNewFood()}>Add New Food</button>  */}
        <div>{this.state.foods.map((elm, idx) => <FoodBox key={idx} name={elm.name} calories={elm.calories} image={elm.image} quantity={elm.quantity}/>)}</div>
      </>
    );
  }
}

export default App;
