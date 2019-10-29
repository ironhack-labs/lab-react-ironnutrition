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

  formVisibility = () =>
    this.setState({
      showForm: !this.state.showForm
    });

  searchFood = search => {
    const results = [];
    const foodList = [...this.state.foodData];
    foodList.map(f => {
      return f.name.toLowerCase().includes(search.toLowerCase())
        ? results.push(f)
        : " ";
    });
    results.length > 1
      ? this.setState({ foodData: results })
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
        <button className="button is-info" onClick={this.formVisibility}>
          {" "}
          Add new food{" "}
        </button>
        {this.state.showForm ? (
          <AddFood addTheFood={this.addFood} showForm={this.formVisibility} />
        ) : null}
        <TodayFoods foods={this.state.todayFood} />
      </div>
    );
  }
}
export default App;
