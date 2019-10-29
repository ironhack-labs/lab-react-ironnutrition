import React, { Component } from "react";
import foods from "./foods.json";
import "./App.css";
import "bulma/css/bulma.css";
import AddFood from "./components/AddFood";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import TodayFoods from "./components/TodayFoods";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodData: foods,
      showForm: false,
      todayFood: []
    };
  }

  addFood = item => {
    const foodArray = [...this.state.foodData];
    foodArray.push(item);
    this.setState({
      foodData: foodArray
    });
  };

  visibleForm = () => {
    this.setState({
      showForm: true
    });
  };

  hideForm = () => {
    this.setState({
      showForm: false
    });
  };

  searchFood = input => {
    const results = [];
    const foodList = [...this.state.foodData];
    foodList.map(f =>
      f.name.toLowerCase().includes(input.toLowerCase()) ? results.push(f) : " "
    );
    results.length > 1
      ? this.setState({ foodData: input })
      : this.setState({ foodData: this.state.foodData });
  };

  addToToday = (name, calories, quantity) => {
    this.setState({
      todayFood: [...this.state.todayFood, { name, calories, quantity }]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <Search searchFood={this.searchFood} />
        <FoodList myfoods={this.state.foodData} addToToday={this.addToToday} />
        <button className="button is-info" onClick={this.visibleForm}>
          {" "}
          Add new food{" "}
        </button>
        {this.state.showForm ? (
          <AddFood addTheFood={this.addFood} showForm={this.hideForm} />
        ) : null}
        <TodayFoods foods={this.state.todayFood} />
      </div>
    );
  }
}
export default App;
