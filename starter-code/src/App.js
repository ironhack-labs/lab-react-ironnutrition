import React, { Component } from "react";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import SearchBar from "./components/SearchBar";

import foods from "./foods.json";

import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showedFoodform: false,
      searchquery: ""
    };
  }

  showFoodform = () => {
    this.setState({ showedFoodform: true });
  };

  handleClick = () => {
    const myFoodsCopy = { ...foods };
    myFoodsCopy.quantity += 1;
    this.setState({ foods: myFoodsCopy });
  };

  addFoodHandler = theFood => {
    const myFoodsCopy = [...foods];
    myFoodsCopy.push(theFood);
    this.setState({ foods: myFoodsCopy, showedFoodform: false });
  };

  updateSearchQuery = newquery => {
    this.setState({
      searchquery: newquery
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">IRON NUTRITION</h1>
        <div>
          <SearchBar update={this.updateSearchQuery} />
        </div>

        <div className="columns">
          <div className="column">
            {this.state.foods
              .filter(food =>
                food.name
                  .toLowerCase()
                  .includes(this.state.searchquery.toLowerCase())
              )
              .map((food, index) => {
                return <FoodBox key={index} food={food} />;
              })}
          </div>


          <div className="column content">
          {this.state.showedFoodform ? (
            <AddFood addTheFood={this.addFoodHandler} />
          ) : (
            <div className="control">
              <button
                className="button is-info"
                onClick={() => this.showFoodform()}
              >
                ADD NEW FOOD
              </button>
            </div>
          )}

          
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
