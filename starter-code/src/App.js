import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foodsJSON from "./foods.json";

import Foodbox from "./Components/Foodbox/Foodbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: Address multiple uses of calls to foods.
      foods: foodsJSON,
      availableFoods: foodsJSON,
      hide: "hide",
      search: "",
      foodsToday: [],
      totalCalories: 0,
      newEntry: { name: "", image: "", calories: "", quantity: "" }
    };
  }

  showFoods = () =>
    this.state.availableFoods.map((eachFood, i) => (
      <Foodbox
        key={i}
        name={eachFood.name}
        image={eachFood.image}
        calories={eachFood.calories}
        quantity={eachFood.quantity}
        theAddFunction={this.updateValues}
      />
    ));

  addNewFood = () => this.setState({ hide: "show" });

  handleFormSubmit = e => {
    e.preventDefault();

    const { newEntry } = this.state;
    if (
      newEntry.name !== "" &&
      newEntry.calories !== "" &&
      newEntry.image !== "" &&
      newEntry.quantity !== ""
    ) {
      const foods = this.state.foods;
      foods.push(newEntry);
      this.setState({
        foods: foods,
        availableFoods: foods,
        hide: "hide",
        newEntry: { name: "", image: "", calories: "", quantity: "" }
      });
    }
  };

  handleInput = e =>
    this.setState({
      newEntry: { ...this.state.newEntry, [e.target.name]: e.target.value }
    });

  search = () => {
    const { availableFoods, search, foods } = this.state;
    let filteredList = [];

    if (search !== "") {
      availableFoods.forEach(item => {
        if (item.name.toLowerCase().includes(search)) {
          filteredList.push(item);
        }
      });
    } else {
      filteredList = foods;
    }

    // TODO: test destructuring setState
    this.state.setState({ availableFoods: filteredList });
  };

  searchHandler = e =>
    this.setState({ search: e.target.value }, () => {
      this.search();
    });

  updateValues = (e, theQuantity, theCalories, theName) => {
    let updateToday = [...this.state.foodsToday];
    let alreadyIn = false;
    updateToday.forEach(item => {
      if (item.name === theName) {
        item.calories =
          Number(item.calories) + Number(theCalories * theQuantity);
        item.quantity = Number(item.quantity) + Number(theQuantity);
        alreadyIn = true;
      }
    });

    if (alreadyIn === false) {
      updateToday.push({
        name: theName,
        calories: theCalories * theQuantity,
        quantity: theQuantity
      });
    }

    this.setState({
      foodsToday: updateToday,
      totalCalories: this.state.totalCalories + theCalories * theQuantity
    });
  };
  generateToday = () => {
    return this.state.foodsToday.map((item, i) => (
      <li key={i}>
        {item.quantity} {item.name} = {item.calories} cal
        <button
          onClick={() => {
            this.removeThis(item);
          }}
        >
          X
        </button>
      </li>
    ));
  };

  removeThis = item => {
    let foodsToday = [...this.state.foodsToday];
    let index;
    let totalCalories = [this.state.totalCalories];
    foodsToday.forEach((food, i) => {
      if (food.name === item.name) {
        index = i;
        console.log(totalCalories);
        totalCalories -= food.calories;
      }
    });
    foodsToday.splice(index, 1);
    this.setState({ foodsToday: foodsToday, totalCalories: totalCalories });
  };
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.searchHandler}
        />
        <div className={this.state.hide}>
          <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.newEntry.name}
              onChange={this.handleInput}
            />
            <label>Calories:</label>
            <input
              type="number"
              name="calories"
              value={this.state.newEntry.calories}
              onChange={this.handleInput}
            />
            <label>Image:</label>
            <input
              type="url"
              name="image"
              value={this.state.newEntry.image}
              onChange={this.handleInput}
            />
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={this.state.newEntry.quantity}
              onChange={this.handleInput}
            />
            <button onSubmit={this.handleFormSubmit}>Submit</button>
          </form>
        </div>
        <button className="button" onClick={this.addNewFood}>
          Add New Food
        </button>
        <div className="today">
          <h2>Today's Foods</h2>
          <ul name="foodsToday">{this.generateToday()}</ul>
          <p>Total: {this.state.totalCalories} cal</p>
        </div>
        <div className="foodContainer">{this.showFoods()}</div>
      </div>
    );
  }
}

export default App;
