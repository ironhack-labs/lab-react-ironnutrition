import React, { Component } from 'react';
import foods from '../foods.json'
import './App.css';
import Foodbox from './foodbox/Foodbox'
import NewFoodForm from './foodbox/NewFoodForm'
import SearchBar from './search-bar/SearchBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    foodsList: foods,
    formIsShow: false
    }
}

addFood = () => {
  this.setState({formIsShow: true})
}

createFood = newFood => {
  const foodListCopy = [...this.state.foodsList]
  foodListCopy.push(newFood)
  this.setState({foodsList: foodListCopy})
  this.setState({formIsShow: false})
}

searchFood = foodName => {
  console.log(foodName)
}

  render() {
    return (
      <div>
      
      <SearchBar searchFood={this.searchFood}/>
      {
        !this.state.formIsShow ? <button onClick={this.addFood}>Add food</button> : <NewFoodForm createFood={this.createFood}/>
      }
      
      {this.state.foodsList.map((elm, idx) => <Foodbox key={idx} {...elm} />)}
      
      </div>
    )
  }
}

export default App;


