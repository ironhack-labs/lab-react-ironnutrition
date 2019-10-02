import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
// import Foodbox from "./components/Foodbox";
import Food from "./components/Food";
import Header from "./components/Header";
import AddNew from "./components/AddNew";
import Search from "./components/Search";
// import { thisTypeAnnotation } from "@babel/types";
import TodayFoods from "./components/TodayFoods";

class App extends Component {
  state = {
    allFoods: foods,
    pickedFoods: [
      { name: "pizza", calories: 300, quantity: 1 },
      { name: "salad", calories: 100, quantity: 1 },
      { name: "pizza", calories: 300, quantity: 1 },
    ]
  };

  pushFood = food => {
    console.log(this.state.allFoods, food);
    let foodsCopy = [...this.state.allFoods];
    foodsCopy.unshift(food);
    this.setState({
      allFoods: foodsCopy
    });
  };

  compare = e => {
    let searchResults = foods.filter(food =>
      food.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    this.setState({
      allFoods: searchResults
    });
    console.log(this.state.allFoods);
  };

  addTodayMeal = () => {
    this.setState({ something: Math.random() });
  };

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
          <TodayFoods something={this.state.something} />
        </div>
      </div>
    );
  }
}

export default App;
