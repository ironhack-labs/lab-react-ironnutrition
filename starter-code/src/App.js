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

  updateList(searchString) {
    this.setState({
      searchText: searchString
    });
  }

  clearFilter() {
    this.setState({
      searchText: ""
    });
  }

  render() {
    const { showForm, searchText } = this.state;
    return (
      <div className="App">
        <div className="SearchBar">
          <Search
            searchSubmit={() => this.updateList()}
            searchClear={() => this.clearFilter()}
          />
        </div>

        <br />

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
          {/* {this.state.foodsArray.map((foodItem, index) => {
            if (searchText === "") {
              return (
                // <key={index}>
                <Foodbox
                  name={foodItem.name}
                  calories={foodItem.calories}
                  image={foodItem.image}
                  quantity={foodItem.quantity}
                />
              );
            } else {
              return (
                foodItem.name.includes(searchText) && (
                  // <key={index}>
                  <Foodbox
                    name={foodItem.name}
                    calories={foodItem.calories}
                    image={foodItem.image}
                    quantity={foodItem.quantity}
                  />
                )
              );
            }
          })} */}
          {this.state.foodsArray
            .filter(food => food.name.includes(this.state.searchText))
            .map(foodItem => {
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
