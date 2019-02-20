import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";
import AddFoodForm from "./components/AddFoodForm.js";
import TodaysFood from "./components/TodaysFood.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFoodForm: false,
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
    this.setState({ showFoodForm: !tempFoodFormIo });
  }

  // form sync with current state
  syncStateForm(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  // toggle form loading animation
  isLoading() {
    const { searchField } = this.state;
    let classes = "control is-medium";
    if (searchField !== []) {
      classes + " is-loading";
    }
    return classes;
  }

  render() {
    const { showFoodForm, searchField, foodArray } = this.state;

    // add loading feedback
    const classNameDivs = searchField
      ? "control is-medium is-loading"
      : "control is-medium";

    return (
      <div className="App container">
        <h1 className="title">Shopping List</h1>
        <h2 className="subtitle"> Because Vegeta is not vegan yet..</h2>
        <div className="field">
          <div className={classNameDivs}>
            <input
              name="searchField"
              className="input is-medium"
              onChange={event => this.syncStateForm(event)}
              type="text"
              placeholder="Type a meal.."
            />
          </div>
        </div>
        {!showFoodForm ? (
          <button
            className="button is-primary"
            onClick={this.toggleAddFoodForm.bind(this)}
          >
            {/* https://stackoverflow.com/a/33846747/3468846 */}
            Add an item
          </button>
        ) : (
          <AddFoodForm
            foodSubmitContent={foodObject => this.addNewFood(foodObject)}
          />
        )}

        <p>Available meals:</p>

        <div className="columns">
          <div className="column is-half">
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

          <div className="column is-half">
            <TodaysFood />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
