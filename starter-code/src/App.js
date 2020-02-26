import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddNewFood from './AddNewFood';
import SearchBar from './SearchBar';

class App extends Component {

  state = {
    foodsList: foods
  }

  addNewFood = (newFoodObj) => {
    const newData = this.state.foodsList;
    newData.push(newFoodObj)
    this.setState({foodArr: newData})
  }

  filterData = (str) => {
    const filteredArr = foods.filter( (oneFood) => {
      if (oneFood.name.includes(str) ) {
        return true
      } else {
        return false
      }
    })
    this.setState({foodsList: filteredArr})
  }
  
  render() {
    return (
      <div className="App">

        {/* newSearch va a SearchBar.js y llama a una propiedad dentro de handleChange. Y filterData va a la funcion filter de App.js */}
        <SearchBar newSearch={this.filterData}/>

        <div>
          <button>Add food</button>
        </div>
        <div>
          <button>Search</button>
        </div>

        <AddNewFood addNew={this.addNewFood} />

        {
          this.state.foodsList.map( (foodObj) => {
            return (
              <FoodBox
              name = {foodObj.name}
              calories = {foodObj.calories}
              image = {foodObj.image}
              quantity = {foodObj.quantity}
              />
            )
          })
        }

      </div>
    );
  }
}

export default App
