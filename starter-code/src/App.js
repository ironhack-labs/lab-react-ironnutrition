import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./component/FoodBox";
import AddFoodButton from "./component/AddFoodButton";
import Search from "./component/Search";

class App extends Component {
  state = {
    foodList: foods,
    visible: false
  };

  searchHandler = event => {
    const foodIndex = event.target.value;
    let newState = { ...this.state };

    newState.foodList = newState.foodList.filter(food => {
      return food.name.indexOf(foodIndex) != -1;
    });

    this.setState(newState);
  };

  addNewFood = newFood => {
    let newState = {
      ...this.state
    };

    newState.foodList.push(newFood);
    this.setState(newState);
  };
  trueFalse = () => {
    let response = "";
    if (this.state.visible) {
      response = false;
    } else {
      response = true;
    }
    this.setState({ visible: response });
  };

  render() {
    const formulario = (
      <AddFoodButton functionProp={this.addNewFood}>Add New Food</AddFoodButton>
    );

    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Search searchFoodProp={this.searchHandler} />
        <FoodBox foodListProp={this.state.foodList} />
        <button
          onClick={() => {
            this.trueFalse();
          }}
        >
          Add New Food
        </button>
        {this.state.visible ? formulario : ""}
      </div>
    );
  }
}

export default App;
