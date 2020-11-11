import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddNewFood from './AddNewFood';


class App extends Component {
  state = {
    food: foods,
    bootFoodFiltered: "",
  }


  newFood = theFood => {
    const foodCopy = [...this.state.food];

    foodCopy.push(theFood)

    this.setState({
      food: foodCopy
    })
  }

  searchFood = event => {
    const foodCopy = [...this.state.food];
    const search = foodCopy.filter((food) => {
       return food.name.includes(event.target.value);
    })
    this.setState({
      bootFoodFiltered: search
    })
  }

  render(){

  const allFood = this.state.food.map(function(food){
    return(
      <FoodBox
      name = {food.name}
      calories = {food.calories}
      image = {food.image}
      quantity = {food.quantity}
      />
    )
  })

  let filter = this.state.bootFoodFiltered?this.state.bootFoodFiltered.map(function(food){
    return(
      <FoodBox
      name = {food.name}
      calories = {food.calories}
      image = {food.image}
      quantity = {food.quantity}
      />
    )
  }): null

  return (
    <div className="App">
      <h1> IronNutrition </h1>
      <div>
        <input type="search" className="search" name="search" placeholder="Search" value={this.state.search} onChange={(e) => this.searchFood(e)}/>
      </div>
      <AddNewFood addNewFood={(e) => this.newFood(e)}/>
      <div>
        {filter ? filter: allFood}
      </div>
      
    </div>
  );

  }
}

export default App;
