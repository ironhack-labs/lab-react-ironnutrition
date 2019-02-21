import React, { Component } from "react";
import "./App.css";

import "bulma/css/bulma.css";
import foods from "./foods.json";

import FoodBox from "./components/FoodBox.js";
import AddFood from "./components/AddFood.js";
import Search from "./components/Search.js";
import Selection from "./components/Selection.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodArray: foods,
      toAdd: false,
      searchCurrent: "",
      selectedArray: []
    };
  }

  toggleToAdd() {
    const currentToAddValue = this.state.toAdd;
    this.setState({ toAdd: !currentToAddValue });
  }

  addNewFood(foodItem) {
    const foodList = this.state.foodArray;
    foodList.unshift(foodItem);
    this.setState({ foodArray: foodList, toAdd: false });
  }

  updateList(searchString) {
    this.setState({ searchCurrent: searchString });
  }

  clearFilter() {
    this.setState({ searchCurrent: "" });
  }

  updateSelection(foodItemSelected) {
    const selectedList = this.state.selectedArray;

    const nameArray = selectedList.map(foodItem => foodItem.name);
    const newName = foodItemSelected.name;

    if (nameArray.indexOf(newName) >= 0) {
      const index = nameArray.indexOf(newName);

      selectedList[index].quantity += foodItemSelected.quantity;

      selectedList[index].totalCalories =
        selectedList[index].quantity * selectedList[index].calories;
      this.setState({ selectedArray: selectedList });
    } else {
      selectedList.push(foodItemSelected);
      this.setState({ selectedArray: selectedList });
    }
  }

  deleteFoodItem(foodName) {
    const selectedFoodList = this.state.selectedArray;

    const selectedNameList = selectedFoodList.map(foodItem => foodItem.name);

    const index = selectedNameList.indexOf(foodName);

    selectedFoodList.splice(index, 1);
    this.setState({ selectedArray: selectedFoodList });
  }

  render() {
    const { foodArray, toAdd, searchCurrent, selectedArray } = this.state;

    return (
      <div className="App">
        <h2 className="title">Iron Nutrition</h2>

        {/* Search section */}
        <section className="searchSection">
          <Search
            searchSubmit={searchString => this.updateList(searchString)}
            searchClear={() => this.clearFilter()}
          />
        </section>

        {/* Add Button section */}
        <section className="addButtonSection">
          {!toAdd && (
            <button
              className="button"
              id="addButton"
              onClick={() => this.toggleToAdd()}
            >
              Add New Food Item
            </button>
          )}

          {toAdd && (
            <AddFood foodSubmit={foodItem => this.addNewFood(foodItem)} />
          )}
        </section>

        {/* List section */}
        <section className="listSection">
          <div className="columns">
            <div className="column" id="list-column">
              <ul>
                {foodArray.map((oneFood, index) => {
                  if (searchCurrent === "") {
                    return (
                      <li key={index}>
                        <FoodBox
                          name={oneFood.name}
                          calories={oneFood.calories}
                          image={oneFood.image}
                          quantity={oneFood.quantity}
                          addToSelection={foodItemSelected =>
                            this.updateSelection(foodItemSelected)
                          }
                        />
                      </li>
                    );
                  } else {
                    console.log(searchCurrent);
                    return (
                      oneFood.name.includes(searchCurrent) && (
                        <li key={index}>
                          <FoodBox
                            name={oneFood.name}
                            calories={oneFood.calories}
                            image={oneFood.image}
                            quantity={oneFood.quantity}
                            addToSelection={foodItemSelected =>
                              this.updateSelection(foodItemSelected)
                            }
                          />
                        </li>
                      )
                    );
                  }
                })}
              </ul>
            </div>
            <div className="column" id="selection-column">
              <Selection
                selectedFoods={selectedArray}
                deleteSelected={foodName => this.deleteFoodItem(foodName)}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
