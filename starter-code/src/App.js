import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json'

import FoodForm from "./components/FoodForm.js"
import Search from "./components/Search.js"
import FoodBox from "./components/FoodBox.js"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showAddButton: false,
      allFoods: foods,
      foods : foods,
      foodSearch : [],
      todayFood : [],
    };
  }

  addNewFood(newFood){
    const { foods, showAddButton } = this.state;
    // "unshift()" is a push that adds the item at the end of the array
    foods.unshift(newFood);
    this.setState({ foods });
    this.setState({ showAddButton : !showAddButton })
  }

  searchFood(whatFood){
    const { allFoods } = this.state;
    const foodSearch = [];
    allFoods.forEach( oneFood => {
      if (oneFood.name.toLowerCase().indexOf(whatFood.toLowerCase()) > -1){
        foodSearch.push(oneFood)
      }
    })
    this.setState({ foods: foodSearch })
  }

  toggleAddButton(){
    const { showAddButton } = this.state;
    this.setState({ showAddButton : !showAddButton })
  }

  addTodaysFood(oneFood){
    const { todayFood } = this.state;
    todayFood.push(oneFood)
    this.setState({ todayFood })
  }

  render() {

    const { showAddButton, foods, todayFood } = this.state;

    const foodsHtml = 
      foods.map((oneFood) => {
        return (<FoodBox name = {oneFood.name} image = {oneFood.image} calories = {oneFood.calories} addTodaysFood={newFood => this.addTodaysFood(newFood)} />)
    });

    const todayfoodsHtml = 
      todayFood.map((oneFood) => {
        return (<li> {oneFood.name}, {oneFood.calories} cal, x {oneFood.quantity}</li>)
    });

    const todaypriceHtml = todayFood.reduce(function(accumulator, currentValue){
      return accumulator + currentValue.quantity * currentValue.calories;
    }, 0);

    return (

      <div className="App">

        <Search searchFood={whatFood => this.searchFood(whatFood)} />

        {showAddButton ? <FoodForm addNewFood={newFood => this.addNewFood(newFood)} /> : <button onClick={() => this.toggleAddButton()}>Add New Food</button>}

        <div className ="fooding">
          <div className="foodList">
           {foodsHtml} 
          </div>
          <div className="todayFood">
            <h3>Today's Food</h3>
            <ul>
              {todayfoodsHtml}
            </ul>
            <p>Total : {todaypriceHtml} cal</p>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
