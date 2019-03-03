import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Foodbox from "./components/Foodbox.js";
import AddFood from "./components/AddFood.js";
import Search from "./components/Search.js";

import "bulma/css/bulma.css";
import foods from "./foods.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      foodsArray: foods,
      searchText: ""
    };
  }

  buttonClick() {
    const addNewValue = this.state.showForm;
    this.setState({
      showForm: !addNewValue
    });
  }

  addFoodHandler = myFood => {
    const foodsCopy = [...this.state.foodsArray];
    foodsCopy.unshift(myFood);
    this.setState({
      foodsArray: foodsCopy,
      showForm: false
    });
  };

  clearFilter() {
    this.setState({
      searchText: ""
    });
  }

  updateList(searchString) {
    this.setState({
      searchText: searchString
    });
  }

  render() {
    const { showForm } = this.state;
    return (
      <div className="App">
        <div className="SearchBar">
          <Search
            searchClear={() => this.clearFilter()}
            searchSubmit={() => this.updateList()}
          />
        </div>

        <div className="ButtonSelection">
          {!showForm && (
            <button
              className="button is-info"
              // onClick={this.buttonClick.bind(this)}
              onClick={() => this.buttonClick()}
            >
              Add Food
            </button>
          )}
          {showForm && <AddFood addMyFood={this.addFoodHandler.bind(this)} />}
          {/* {this.state.showForm ? (
            <AddFood addMyFood={this.addFoodHandler.bind(this)} />
          ) : null} */}
        </div>

        <div className="List">
          {this.state.foodsArray.map((foodItem, index) => {
            return (
              <Foodbox
                name={foodItem.name}
                calories={foodItem.calories}
                image={foodItem.image}
                quantity={foodItem.quantity}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
