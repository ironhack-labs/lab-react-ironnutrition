import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json';
import SearchFood from './components/SearchFood';
import AddFood from './components/AddFood';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchBoxString: '',
      foods: foods,
    }
    this.searchBoxStringChangeHandler = this.searchBoxStringChangeHandler.bind(this)
    this.addFoodHandler = this.addFoodHandler.bind(this)
  }


  searchBoxStringChangeHandler (inputValue) {
    this.setState({
      searchBoxString: inputValue
    })
  }

  addFoodHandler = (theFood) => {
    console.log("my current Foods:", foods)
    console.log("food to add:", theFood)
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    console.log("my New Foods after push:", foodsCopy)
    this.setState({
      foods: foodsCopy
    })
  }


  render () {
    const filteredFoodList = this.state.foods.filter((food) => food.name.toLowerCase().includes(this.state.searchBoxString.toLowerCase()) ) 
    const foodBoxes = filteredFoodList.map((food, idx) => <FoodBox food = {food} key= {idx + food.name}/>)
    return (
      <div>
      <SearchFood sendStateToParent = {this.searchBoxStringChangeHandler}/>
      <AddFood addFood={this.addFoodHandler}/>
      {foodBoxes}
      </div>
    )
  }
}

export default App
