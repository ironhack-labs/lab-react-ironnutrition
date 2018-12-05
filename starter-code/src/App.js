import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodList from "./foods.json"

import FoodBox from "./FoodBox.js"

class App extends Component {
  state = {
    food: foodList,
    searchFood: foodList,
    form: false,
    valueName: "",
    valueCalories: "",
    valueImage: "",
    valueSearch: ""
  }

  formCall = () => {
    this.setState({
      form: true
    })
  }

  formSubmit = (e) => {
    e.preventDefault()
    const tempFood = [...this.state.food]
    tempFood.push({
      name: this.state.valueName,
      calories: this.state.valueCalories,
      image: this.state.valueImage,
      quantity: 0
    })
    this.setState({
      food: tempFood,
      form: false,
      valueName: "",
      valueCalories: "",
      valueImage: "",
    })
  }

  nameChange = (e) => {
    this.setState({
        valueName: e.target.value
    })
  }

  caloriesChange = (e) => {
    this.setState({
        valueCalories: e.target.value
    })
  }

  imageChange = (e) => {
    this.setState({
        valueImage: e.target.value
    })
  }

  searchChange = (e) => {
    let filter = e.target.value
    const tempFood = this.state.searchFood.filter((foodItem)=>{
      return foodItem.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })
    this.setState({
      food: tempFood,
      valueSearch: filter
    })
  }

  render() {
    const listOfFood = this.state.food.map((foodItem, index)=>{
      return(
        <FoodBox key={index} foodName={foodItem.name} foodCalories={foodItem.calories} img={foodItem.image}/>
      )
    })
    return (
      <div className="App">
        {this.state.form ? 
          <form onSubmit={this.formSubmit}>
            <label>Food Name:</label>
            <input value={this.state.valueName} onChange={(e) => this.nameChange(e)}/>
            <label>Calories:</label>
            <input type="number" value={this.state.valueCalories} onChange={(e) => this.caloriesChange(e)}/>
            <label>Image URL:</label>
            <input value={this.state.valueImage} onChange={(e) => this.imageChange(e)}/>
            <button>Submit</button>
          </form>
        : 
          <button onClick={this.formCall}>Add New Item</button>
        }
        <label>Search: </label>
        <input value={this.state.valueSearch} onChange={(e) => this.searchChange(e)}></input>
        {listOfFood}
      </div>
    );
  }
}

export default App;
