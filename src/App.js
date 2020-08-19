// Library
import React from 'react';
// Styling
import 'bulma/css/bulma.css';
import './App.css';
// File import
import foods from './foods.json';
import FoodList from './components/FoodList';
import Search from './components/Search';
import AddFood from './components/AddFood';
import TodaysFood from './components/TodaysFood';

class App extends React.Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    addingFood: false,
    todaysFood:[]
  }

  handleAddForm = () => {
    console.log("add food clicked")
    this.setState({
      addingFood: !this.state.addingFood
    })
  }

  handleAddFood = (event) => {
    event.preventDefault()
    let newItem = {
      name: event.currentTarget.name.value,
      image: event.currentTarget.image.value,
      calories: event.currentTarget.calories.value,
      quantity: 0
    }
    this.setState({
      foods: [newItem, ...this.state.foods],
      filteredFoods: [newItem, ...this.state.foods],
      addingFood: false
    })
    event.currentTarget.name.value = ""
    event.currentTarget.image.value = ""
    event.currentTarget.calories.value = ""
  }

  handleSearch = (event) => {
    let searchName = event.currentTarget.value.toLowerCase()
    let cloneFoods = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(searchName)
    })
    this.setState({
      filteredFoods: cloneFoods
    })
  }

  handleTodaysFood = (id, quantity) => {
    let addedFood = this.state.filteredFoods[id]
    addedFood.quantity = Number(quantity);
    let cloneFoods = [...this.state.foods]
    cloneFoods.forEach(food => {
      if(food.name === addedFood.name) {
        food.quantity = addedFood.quantity
      }
    })
    let newTodaysFood = [...this.state.todaysFood, addedFood]
    this.setState({
      foods: cloneFoods,
      filteredFoods: cloneFoods,
      todaysFood: [...new Set(newTodaysFood)]
    })
  }

  handleDelete = (id) => {
    let cloneTodaysFood = [...this.state.todaysFood]
    cloneTodaysFood.splice(id, 1)
    this.setState({
      todaysFood: cloneTodaysFood
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
          <Search onSearch={this.handleSearch}/>
        </div>
        <div className="addFood">
          <button className="button is-info is-outlined" onClick={this.handleAddForm}>Add Food</button>
          {this.state.addingFood && <AddFood onAdd={this.handleAddFood} />}
        </div>

        <div className="columns">
          <FoodList foods={this.state.filteredFoods} onAdd={this.handleTodaysFood} />
          <TodaysFood todaysFood = {this.state.todaysFood} onDelete={this.handleDelete}/>
        </div>
      </div>
    );
  }
  
}

export default App;
