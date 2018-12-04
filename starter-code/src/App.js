import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";

import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      formShowed: false
    };
  }

  toggleForm = () => {
    let show = !this.state.formShowed;
    this.setState({ ...this.state, formShowed: show });
  };

  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.foods];
    foodCopy.push(theFood);
    this.setState({
      foods: foodCopy
    })
  }

  render() {
    console.log();

    return (
      <React.Fragment>
        <div className="App">
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
          <div className='buttonAdd'>
            <a onClick={this.toggleForm} className="button is-primary">
              Add new food
            </a>
          </div>

          {this.state.formShowed && <AddFood addFoodHandler={this.addFoodHandler} />}

          {this.state.foods.map((food, i) => (
            <FoodBox
              key={i}
              name={food.name}
              img={food.image}
              calories={food.calories}
              quantity={food.quantity}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
