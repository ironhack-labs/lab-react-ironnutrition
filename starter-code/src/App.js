import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";
import AddFoodForm from "./components/AddFoodForm.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFoodForm: true,
      foodArray: foods,
      searchField: ""
    };
  }

  // method called along AddFoodForm prop submitted content
  addNewFood(foodObject) {
    // add new item at top of array
    let tempFoodsArray = this.state.foodArray;
    tempFoodsArray.unshift(foodObject);

    // is Food Form visible or hidden ?
    let tempFoodFormIo = this.state.showFoodForm;

    // hide child component (add food form)
    this.toggleAddFoodForm();

    // change state
    this.setState({ foodArray: foods, showFoodForm: !tempFoodFormIo });
  }

  toggleAddFoodForm() {
    // is Food Form visible or hidden ?
    let tempFoodFormIo = this.state.showFoodForm;

    console.log(!tempFoodFormIo, "is the new state of my form");

    this.setState({ showFoodForm: !tempFoodFormIo });
  }

  // form sync with current state
  syncStateForm(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { showFoodForm, searchField, foodArray } = this.state;
    return (
      <div className="App">
        <div className="field">
          <div className="control is-medium is-loading">
            <input
              name="searchField"
              className="input is-medium"
              onChange={event => this.syncStateForm(event)}
              type="text"
              placeholder="Type a meal.."
            />
          </div>
        </div>
        {showFoodForm && (
          <AddFoodForm
            foodSubmitContent={foodObject => this.addNewFood(foodObject)}
          />
        )}
        <p>Available meals:</p>
        {foodArray.map((oneFood, index) => {
          // filter, case insensitive
          let matches = oneFood.name
            .toLowerCase()
            .includes(searchField.toLowerCase());

          //  REFACTOR INTO {condition && view} (opposite way)
          if (matches) {
            return <FoodBox food={oneFood} key={index} />;
          } else return "";
        })}
      </div>
    );
  }
}

export default App;
