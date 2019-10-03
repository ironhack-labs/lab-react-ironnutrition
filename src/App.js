import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Food from "./components/Food";
import Header from "./components/Header";
import AddNew from "./components/AddNew";
import Search from "./components/Search";
import TodayFoods from "./components/TodayFoods";

class App extends Component {
  state = {
    allFoods: foods,
    displayFoods: foods,
    pickedFoods: [],
    caloricTotal: 0
  };

  pushFood = food => {
    let foodsCopy = [...this.state.allFoods];
    foodsCopy.unshift(food);
    this.setState({
      allFoods: foodsCopy,
      displayFoods: foodsCopy,
    });
  };

  compare = e => {
    let searchResults = foods.filter(food =>
      food.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    this.setState({
      allFoods: searchResults
    });
  };

  addTodayMeal = a => {
    let cart = [...this.state.pickedFoods];
    cart.push({
      quantity: Number(a.quantity),
      name: a.food.name,
      calories: a.food.calories
    });
    let newCalories =
      this.state.caloricTotal + Number(a.quantity) * Number(a.food.calories);
    console.log(newCalories, this.state.caloricTotal);
    this.setState({
      pickedFoods: cart,
      caloricTotal: newCalories
    });
  };

  addTodayMealUpdates = food => {
    let cart = {...this.state.pickedFoods};
    cart[food.name] = food;
    this.setState({
      pickedFoods: cart,
    })
  }

  render() {
    return (
      <div className="container">
        <Header title="IronNutrition" />
        <AddNew addTheMeal={this.pushFood} />
        <Search filter={() => this.compare} />
        <div className="columns">
          <Food
            allFoods={this.state.allFoods}
            addTodayMeal={this.addTodayMeal}
          ></Food>
          <TodayFoods something={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
