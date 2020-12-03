import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import foods from './foods.json';
import Searchbar from './SearchBar';

class App extends Component {
  state = {
    foods: foods,
    search: ""
  }

  // method to add a new food 
  addOneFood = (newFood) => {
    const updatedFoods = [newFood, ...this.state.foods ];
    this.setState({foods: updatedFoods})
  }

  handleChange = (e) => {
    // input of the search field
    console.log("e", e.target.value) 
    const inputSearch = e.target.value
    this.setState({search : inputSearch})
  }

  render () {
  return (
    <div className="App">
    <h1>IronNutrition</h1>
    {this.state.foods.map((foodObj,i) =>{
      return(<FoodBox  
        key={i} 
        foodObj={foodObj}
      />)
    })}
      
    <AddFood addFood={this.addOneFood}/>
    <Searchbar placeholder="Look for food" handleChange={this.handleChange} />
     
    </div>
  );
}
}

export default App;
