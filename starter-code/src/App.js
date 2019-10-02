import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import Form from "./Form";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showForm: false
    };
  }
  updateState(newFood) {
    let newState = {
      ...this.state
    };
    newState.foods.unshift(newFood);

    this.setState(newState);
  }

  destroyForm() {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
  }
  searchFoods(e) {
    let clonedState = { ...this.state };
    let searchedWord = e.target.value;
    let filteredWords = clonedState.foods.filter(food =>
      !food.name.toLowerCase().indexOf(searchedWord,0)
    );
    this.setState(
      {
        ...this.state,
        foods: filteredWords
      },
      () => {
        this.state.foods = [...clonedState.foods];
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronNutrition</h1>
        </header>
        <input
          type="text"
          defaultValue=""
          onChange={e => this.searchFoods(e)}
        />
        <button className="removal" onClick={() => this.destroyForm()}>
          Add new food
        </button>
        <SearchBar></SearchBar>
        <div className="contents">
          {this.state.showForm && (
            <Form sendStateFromApp={state => this.updateState(state)}></Form>
          )}
          {this.state.foods.map((value, idx) => (
            <FoodBox key={idx} {...value} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
