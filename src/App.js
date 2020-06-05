import React, { Component } from 'react';
import './App.css';
import { foods } from './foods';
import FoodBox from './components/FoodBox'
import _ from 'lodash'
import AddFood from './components/AddFood'
import SearchBox from './components/SearchBox'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      foods: foods,
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  addFoodHandler = (newFood) => {
    this.setState({
      foods: this.state.foods.concat(newFood)
    })
  }

  render() {

    const { foods, searchfield } = this.state;
    const filteredFoods = foods.filter(food =>{
      return food.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
      <div className="App">
        <h1 className="title is-1">Iron Nutrion</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <div>
          {filteredFoods.map(food => {
            console.log(food)
            return <FoodBox food={food} key={food.name} />
          })}
        </div>
        <div>
          <AddFood addFoodHandler={this.addFoodHandler} />
        </div>
      </div>
    )
  }
}

export default App;
