import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodList from "./foods.json"

import FoodBox from "./FoodBox.js"

class Main extends Component {
  state = {
    food: foodList,
    searchFood: foodList,
    todayFood: [],
    form: false,
    valueName: "",
    valueCalories: "",
    valueImage: "",
    valueSearch: "",
    totalCal: 0
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
    const filter = e.target.value
    const tempFood = this.state.searchFood.filter((foodItem)=>{
      return foodItem.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })
    this.setState({
      food: tempFood,
      valueSearch: filter
    })
  }

  addItem = (index, e) => {
    const tempFood = [...this.state.todayFood];
    const tempFoodList = [...this.state.food]
    if((tempFood.indexOf(tempFoodList[index]))=== -1){
      tempFood.push(tempFoodList[index])
    }
    tempFood[tempFood.indexOf(tempFoodList[index])].quantity = 0;
    tempFood[tempFood.indexOf(tempFoodList[index])].quantity += Number(e)
    let tempCal = 0;
    tempFood.forEach((foodItem)=>{tempCal += (foodItem.quantity*foodItem.calories)})
    this.setState({
      todayFood: tempFood,
      totalCal: tempCal
    })
  }

  delete = (index) => {
    const tempFood = [...this.state.todayFood];
    tempFood.splice(index, 1)
    let tempCal = 0;
    tempFood.forEach((foodItem)=>{tempCal += (foodItem.quantity*foodItem.calories)})
    this.setState({
      todayFood: tempFood,
      totalCal: tempCal
    })
  }

  render() {
    const listOfFood = this.state.food.map((foodItem, index)=>{
      return(
        <FoodBox key={index} 
        foodName={foodItem.name} 
        foodCalories={foodItem.calories} 
        img={foodItem.image} 
        addItem={(amountOfItems) => this.addItem(index, amountOfItems)}/>
      )
    })

    const todayList = this.state.todayFood.map((foodItem, index)=>{
      return(
        <li key={index}>{foodItem.quantity} {foodItem.name} = {foodItem.calories * foodItem.quantity} cal <button onClick={()=>this.delete(index)}>Delete</button></li>
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
        <div className="columns">
          <div className="column">
          {listOfFood}
          </div>
          <div className="column">
          <h1>Today's Food</h1>
          <ul>{todayList}</ul>
          <p>Total: {this.state.totalCal} cal</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
