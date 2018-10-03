import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import Form from "./components/Form";
import Search from "./components/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      hidden: false
    };
  }

  toggleForm = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  submitForm = e => {
    const originalFood = this.state.foods;
    originalFood.push(e);
    this.setState({
      foods: originalFood
    });
  };
  searchFood = words => {
    let newList = foods.filter(word =>
      word.name.toLowerCase().includes(words.toLowerCase())
    );
    this.setState({
      foods: newList
    });
  };

  render() {
    let foodList = this.state.foods.map(food => {
      return (
        <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}/>
      );
    });

    return (
      <div className="App">
        <h1> IronNutrition </h1>{" "}
        <Search searchFood={food => this.searchFood(food)} />
        <div className="add-new">
          <button
            onClick={() => this.toggleForm()}
            className="button is-success toggle-btn"
          >
            {this.state.hidden ? "Hide" : "Show"}
            Form{" "}
          </button>{" "}
          {this.state.hidden && (
            <Form submitForm={e => this.submitForm(e)} />
          )}{" "}
        </div>
        {foodList}{" "}
      </div>
    );
  }
}

export default App;
