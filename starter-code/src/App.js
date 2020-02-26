import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import Form from "./Form";
class App extends Component {
  state = {
    foods,
    open: true
  };

  switchMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  addFood(newFood) {
    console.log(newFood);
    // food.push(newFood);
  }

  render() {
    return (
      <div id="root">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
            <input
              type="text"
              className="input search-bar"
              name="search"
              placeholder="Search"
              value=""
            />
          </div>
          <div>
            <button onClick={() => this.switchMenu()}>
              {this.state.open ? "Close" : "Open"} form
            </button>
            {this.state.open && (
              <div className="contents">
                <Form function={(newFood) => this.addFood(newFood)}></Form>
              </div>
            )}
          </div>
          <div className="columns">
            <div className="column">
              <div className="App">
                {this.state.foods.map(food => (
                  <FoodBox
                    // clickToAdd={() => this.clickToAdd(food.quantity)}
                    calories={food.calories}
                    name={food.name}
                    image={food.image}
                  ></FoodBox>
                ))}
              </div>
            </div>
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              <li>1 Pizza = 400 cal</li>
              <li>2 Salad = 300 cal</li>
            </ul>
            <strong>Total: 700 cal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
