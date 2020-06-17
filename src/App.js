import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json';

// Components
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import TodaysFood from './components/TodaysFood'


class App extends Component {

  state = {
    food: foods,
    filteredFood: foods,
    todaysFood : [],
    showSection: false,
    buttonTitle: 'Add Food'
  }

  addForm = () => {
    this.setState({
      buttonTitle: (this.state.showSection && 'Add Food') || 'Close',
      showSection: !this.state.showSection
    })
  }

  handleAddItem = (event) => {
    event.preventDefault()
    let name = event.target.name.value;
    let calories = event.target.calories.value
    let image = event.target.image.value
    this.setState({
      food: [...this.state.food, {name: name, calories: calories, image: image}],
      filteredFood: [...this.state.food, {name: name, calories: calories, image: image}]
    })
  }

  handleFilter = (event) => {
    let inp = event.target.value
    inp = inp.toUpperCase()
    let newItems = this.state.food.filter((item)=>{
      return item.name.toUpperCase().includes(inp)
    })

    this.setState({
      filteredFood: newItems
    })
  }

  handleTodasFood = (event) => {
    
    let newValue = this.state.food[event]
    this.setState({
      food: [...this.state.food, {name: newValue.name, calories: newValue.calories, quantity: newValue.quantity++}],
      todaysFood: [...this.state.todaysFood, {name: newValue.name, calories: newValue.calories, quantity: 1}]
    })
  }

  render() {
    return (
    <>
      <h1>IronNutrition</h1>
      <input type="text" onChange={this.handleFilter} placeholder="Search" className="search-input"/>
      {this.state.showSection && <AddFood addItem={this.handleAddItem}/>}
      <button onClick={this.addForm} className="add-form">{this.state.buttonTitle}</button>
      <section className="side-by-side">
        <FoodBox food={this.state.filteredFood} addToday={this.handleTodasFood}/>
        <TodaysFood className="todays-food" food={this.state.todaysFood}/>
      </section>
      
    </>
    )
  }
}

export default App;
