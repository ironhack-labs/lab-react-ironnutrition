import React, { Component } from 'react'
import "bulma/css/bulma.css";
import './App.css';
import foods from "./foods.json";
import FoodList from './components/FoodList';
import AddFoods from './components/AddFoods';
import TodaysFoods from './components/TodaysFoods';

export default class App extends Component {

  state = {
    foodList: foods,
    filteredFoods: foods,
    todaysFoods: [],
    showAddForm: false
  }

  handleShowAddForm = () => {
    this.setState({
      showAddForm: true
    })
  }

  handleAddFood = (e) => {
    e.preventDefault();

    let newFood = {
      name: e.target.name.value,
      calories: e.target.calories.value,
      image: e.target.image.value,
    }

    this.setState({
      foodList: [...this.state.foodList, newFood],
      filteredFoods: [...this.state.filteredFoods, newFood],
      showAddForm: false
    })
  }

  handleSearch = (e) => {
    let search = e.target.value;
    const { foodList } = this.state;

    let filtered = foodList.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })

    this.setState({
      filteredFoods: filtered
    })
  }

  handleTodaysFood = (food, quantity) => {
    let updateList = this.state.foodList.map((elem) => {
      if (elem.name === food) elem.quantity += Number(quantity.value);
      return elem;
    })

    let filterList = this.state.foodList.filter((elem) => {
      return elem.quantity > 0;
    })

    this.setState({
      foodList: updateList,
      todaysFoods: filterList
    })

    quantity.value = 1;
  }

  handleDeleteToday = (food) => {
    let updateList = this.state.foodList.map((elem) => {
      if (elem.name === food) elem.quantity = 0;
      return elem;
    })

    let filterList = this.state.foodList.filter((elem) => {
      return elem.quantity > 0;
    })

    this.setState({
      foodList: updateList,
      todaysFoods: filterList
    })
  }

  render() {
    let { showAddForm, filteredFoods, todaysFoods } = this.state

    return (
      <div className="body-div">
        <h1 className="title">IronNutrition</h1>

        <div className="add-form">
          {
            showAddForm ? (<AddFoods onAddFood={this.handleAddFood} />) : (<button onClick={this.handleShowAddForm} className="button is-primary">Add Food</button>)
          }
        </div>

        <input onChange={this.handleSearch} name="search" className="input is-info search-bar" type="text" placeholder="Search foods"></input>

        <div className="columns ">
          <div className="column my-left-column">
            <FoodList foods={filteredFoods} onAddTodaysFood={this.handleTodaysFood} />
          </div>
          <div className="column my-right-column">
            <TodaysFoods foods={todaysFoods} onDeleteTodaysFood={this.handleDeleteToday} />
          </div>
        </div>

      </div>
    )
  }
}
