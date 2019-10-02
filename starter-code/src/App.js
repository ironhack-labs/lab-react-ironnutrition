import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: foods,
      newFoodArr: foods,
      showForm: false,
      newValue: ""
    };
  }

  updateState(newFood) {
    let newState = {
      ...this.state
    };
    newState.food.unshift(newFood);
    newState.newFoodArr.push(newFood)
    this.setState({newState, showForm : false})
    ;
  }

  showForm() {
    this.setState({
      ...this.state,
      showForm: true
    });
  }

  searchChange(e) {

    let newState = {
      ...this.state
    };
    let newCurrentValue= newState.newFoodArr.filter(food => food.name.includes(e.target.value))
    newState.food = newCurrentValue
    this.setState (newState)
  }

  render() {
    return (
      <div className="App">
        <form className="search">
            <input
              type="text"
              placeholder="search your food"
              onChange={(e) => this.searchChange(e)}
            ></input>
            </form>
        <button onClick={e => this.showForm(e)}>Show form</button>
        {this.state.showForm && (
          <Form sendStateFromApp={state => this.updateState(state)}></Form>
        )}
        {this.state.food.map((foodOne, idx) => (
          <FoodBox key={idx} {...foodOne}></FoodBox>
        ))}
      </div>
    );
  }
}

export default App;
