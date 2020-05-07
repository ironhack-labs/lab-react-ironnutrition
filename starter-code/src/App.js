import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood'
import SearchBar from './components/SearchBar'
import TodaysFood from "./components/TodaysFood";

class App extends Component {

  state = {
    foods: foods,
    displayForm: false,
    displayButton: true,
    results: foods,
    todaysFood: []
  }

  displayForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
    this.displayButton()
  }

  displayButton = () => {
    this.setState({
      displayButton: !this.state.displayButton
    })
  }

  addNewFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy
    })
  }

  filterFoods = (searchInput) => {
    // let foodsCopy = [...this.state.foods];
    // foodsCopy.push(searchInput);
    console.log(searchInput)
    const filterResults = this.state.foods.filter(f=>f.name.includes(searchInput.name))
    this.setState({
      results: filterResults
    })
  }

  // addFood = (food) => {
  //   const todaysFood = [...this.state.todaysFood, food]
    
  //   this.setState({
  //     todaysFood: todaysFood 
  //   })
  // }

  addFood = (food) => {
      
      if (this.state.todaysFood.find(e => e.name == food.name)) {
        const todaysFood = [...this.state.todaysFood]
        todaysFood.find(f=>f.name.includes(food.name)).quantity++
        console.log(todaysFood.find(f=>f.name.includes(food.name)).quantity)
        this.setState({
          todaysFood: todaysFood 
        })
      } else {
        const todaysFood = [...this.state.todaysFood, food]
      
        this.setState({
          todaysFood: todaysFood 
        })
      }
  }

  deleteFood = (foodName) => {
    const todaysFood = [...this.state.todaysFood]
    const findIndex = todaysFood.findIndex(f => f.name === foodName)
    console.log(findIndex)

    todaysFood.splice(findIndex, 1)
    this.setState({todaysFood: todaysFood})
  }

  render() {
    
    let form = null
    if ( this.state.displayForm ) {
      form = (
      <div>
           <AddNewFood addNewFood={this.addNewFoodHandler} displayButton={this.displayButton} displayForm={this.displayForm}/>
      </div>
      )
    }

    let button = null
    if ( this.state.displayButton ) {
      button = (
      <div>
           <button className='button is-primary' onClick={this.displayForm}>Add some food</button>
      </div>
      )
    }
 
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
            <SearchBar filterFoods={this.filterFoods} />
            {/* <input type="text" className="input search-bar" name="search" placeholder="Search" value="" /> */}
          </div>
          <div className="columns">
            <div className="column">
              {this.state.results.map((contact, index) => (
                <FoodBox key={index}
                  name={contact.name}
                  calories={contact.calories}
                  image={contact.image}
                  quantity={contact.quantity}
                  addFood={this.addFood}
                  // deleteFood={this.deleteFood}
                  />
              ))}
            </div>
          <div className="column content">
            <div>
              {/* <AddNewFood addNewFood={this.addNewFoodHandler} /> */}
              {/* <button className='button is-primary' onClick={this.displayForm}>Add some food</button> */}
              {button}
              {form}
              <div>
                <TodaysFood 
                  foodArray={this.state.todaysFood}
                  deleteFood={this.deleteFood}
                />
              </div>
            </div>
            {/* <h2 className="subtitle">Today's foods</h2>
            <ul>
              <li>1 Pizza = 400 cal</li>
              <li>2 Salad = 300 cal</li>
            </ul>
            <strong>Total: 700 cal</strong> */}
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
