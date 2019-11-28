import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import FormAddFoodBox from "./components/FormAddFoodBox";
import SearchBar from "./components/SearchBar";
import TodaysFoods from "./components/TodaysFoods";

class App extends Component {
  state = {
    isActive: false,
    foods: foods,
    todaysFoods: []
  };

  handleClick = e => {
    this.setState({ isActive: true });
  };

  addMyFood = v => {
    this.setState({ todaysFoods: [...this.state.todaysFoods, v] });
  };

  addProduct = info => {
    this.setState({ foods: [...this.state.foods, info], isActive: false });
  };

  handleChange = input => {
    const searchValue = input.value;
    let filtered = foods.filter(f =>
      f.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    this.setState({ foods: filtered });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <SearchBar clbk={this.handleChange} />
          <button className="addFoodBox" onClick={this.handleClick}>
            Create FoodBox
          </button>
        </div>
        <div className="form">
          {this.state.isActive && <FormAddFoodBox clbk={this.addProduct} />}
        </div>
        <div className="columns">
          <div class="column content">
            <h2 class="subtitle">Today's foods</h2>
            <ul>
              {this.state.todaysFoods.map((v, i) => (
                <div className="column" key={i}>
                  <TodaysFoods v={v} />
                </div>
              ))}
            </ul>
          </div>
          {this.state.foods.map((f, i) => (
            <div className="column" key={i}>
              <FoodBox clbk={this.addMyFood} f={f} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
