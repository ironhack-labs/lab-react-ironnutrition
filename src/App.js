
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './Components/FoodBox.jsx'
import NewFoods from './Components/NewFoods.jsx'



 class App extends Component {

  state= {
    myFoodies: foods,
  }

  addFood = (childValue) => {
    this.setState({ myFoodies: [childValue, ...this.state.myFoodies]})
  }

  render() {
    return (
      <div>
        <FoodBox 
      
      myFoodies={this.state.myFoodies}
      />
      <NewFoods addFood={this.addFood}/>
      </div>
    )
  }
}



export default App;
