import React, { Component } from "react";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import "./App.css";
import FoodBox from "./FoodBox.js";
import AddFood from "./AddFood.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Food: foods,
      enableForm: false,
      SelectedFood: [],
      total: 0
    };
  }

  search(val) {
    let filter = foods.filter(food => {
      return food.name.toLowerCase().includes(val);
    });
    this.setState({ Food: filter });
  }

  toggleForm = () => {
    this.setState({ enableForm: !this.state.enableForm });
  };

  addFood = food => {
    this.state.Food.unshift(food);
    this.setState({
      Food: this.state.Food,
      enableForm: !this.state.enableForm
    });
  };

  totalCal = val => {
    this.state.SelectedFood.push(val);
    this.setState({
      SelectedFood: this.state.SelectedFood,
      total: this.state.total + val.calories
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
            <input
              type="text"
              className="input search-bar"
              name="search"
              onKeyUp={e => {
                this.search(e.target.value);
              }}
              placeholder="Search"
              defaultValue=""
            />
          </div>
          <div className="level-center">
            {!this.state.enableForm && (
              <button className="button is-primary" onClick={this.toggleForm}>
                Add food
              </button>
            )}
          </div>
          {this.state.enableForm && (
            <AddFood newFood={food => this.addFood(food)} />
          )}
          <div className="columns">
            <div className="column">
              {this.state.Food.map((e, i) => {
                return (
                  <FoodBox
                    key={e.name}
                    {...e}
                    totalCal={val => this.totalCal(val)}
                  />
                );
              })}
            </div>
            <div className="column content">
              <h2 className="subtitle">Today's foods</h2>
              <ul>
                {this.state.SelectedFood.map((e, i) => (
                  <li key={e.image}>
                    {e.quantity} {e.name} = {e.calories} cal
                  </li>
                ))}
              </ul>
              <p>Total: {this.state.total} cal</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
