import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import foods from './foods.json'
import FoodBox from "./FoodBox"
import SearchBar from "./SearchBar"
import AddForm from "./AddForm"

class App extends Component {
  constructor ()
    {
      super();

      this.state = {
        foods: foods,
        menu: []
      }
    }

  addFood(newFood) {
    let updatedFoods = [...this.state.foods]
    updatedFoods.push(newFood)
    this.setState({
      ...this.state,
      foods: updatedFoods
    })
  }

  addMenuFood(newMenuFood) {

    let updatedMenuFoods = [...this.state.menu]
    
    let idx = updatedMenuFoods.findIndex(food => food.name === newMenuFood.name)

    if(idx < 0) {updatedMenuFoods.push(newMenuFood)}
    else {updatedMenuFoods[idx].quantity = +updatedMenuFoods[idx].quantity + +newMenuFood.quantity}
    
    this.setState({
      ...this.state,
      menu: updatedMenuFoods
    })
  }

  filterFood(searchFood) {
    let filteredFood = [...foods]
    this.setState({
      ...this.state,
      foods: filteredFood.filter(food => food.name.toLowerCase().includes(searchFood))
    })
  }

  deleteMenuItem(idx) {
    this.setState({
      ...this.state,
      menu: this.state.menu.filter(food => this.state.menu.indexOf(food) !== idx)
    })
  }

  render() {
    let totalCalories = (this.state.menu.length > 0) ? 
      this.state.menu.reduce((ac, cv) => ac + (+cv.quantity * +cv.calories), 0)
      : 0
    return (
      <React.Fragment>
        <h1>IronNutrition</h1>
        <nav>
          <SearchBar className="search" search={(searchFood) => this.filterFood(searchFood)}/>
          <AddForm className="addform" newFood={(newFood) => this.addFood(newFood)}/>
        </nav>
        <div className="container">
          <div className="foodlist">
          {this.state.foods.map((food, idx) => {
          return <FoodBox key={idx} {...food} menuFood={(newMenuFood) => this.addMenuFood(newMenuFood)}/>
          })}
        </div>
        <div className="menu">
          <h2>Today's Foods</h2>
          <ul>
            {this.state.menu.map((food, idx) => {
              return <div key={idx}>
              <p>{food.quantity}</p>
              <p>{food.name}</p>
              <p>{food.calories * food.quantity}</p>
              <button onClick={() => this.deleteMenuItem(idx)}>Delete Food</button>
              </div>
            })}
          </ul>
          <p>Total: {totalCalories}</p>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
