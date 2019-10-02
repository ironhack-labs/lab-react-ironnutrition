import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import FoodForm from "./FoodForm";
import Search from "./Search";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: foods,
      cleanFoods: foods,
      showForm: false
    };
  }

  updateState(newFood) {
    let newState = {
      ...this.state
    };

    newState.foods.unshift(newFood);

    this.setState({
      ...this.state,
      newState,
      cleanFoods: newState.foods,
      showForm: false
    });
  }

  updateSearch(e) {
    let search = e.target.value;
    let foodsSearch = [...this.state.cleanFoods];
    this.setState({
      ...this.state,
      foods: foodsSearch.filter(food =>
        food.name.toLowerCase().includes(search.toLowerCase())
      )
    });
  }

  showForm() {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Search
          updateSearchFormData={e => this.updateSearch(e)}
        ></Search>
        <div className="foodForm">
          <button className="removal" onClick={() => this.showForm()}>
            Show form
          </button>
          {this.state.showForm && (
            <FoodForm
              sendStateFromApp={state => this.updateState(state)}
            ></FoodForm>
          )}
        </div>
        <div className="foodList">
          {this.state.foods.map((food, idx) => (
            <FoodBox key={idx} {...food}></FoodBox>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
