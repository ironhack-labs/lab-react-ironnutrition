import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";
import TodaysFood from "./components/TodaysFood";

class App extends Component {
  state = {
    addFoodFormIsVisible: false,
    filter: "",
    foods: foods,
    todaysFood: [] // [name, calories, quantity]
  };

  displayAddForm = () => {
    this.setState({
      addFoodFormIsVisible: !this.state.addFoodFormIsVisible
    });
  };

  addFood = newFood => {
    this.setState({
      foods: [...this.state.foods, newFood],
      addFoodFormIsVisible: false
    });
  };

  filterFood = e => {
    this.setState({
      filter: e.target.value
    });
  };

  listFoods = () => {
    if (this.state.filter) {
      return this.state.foods.filter(e => e.name.match(new RegExp(this.state.filter, "ig")));
    }
    return this.state.foods;
  };

  addToTodaysHandler = food => {
    // const cleanArr = [];
    // [...this.state.todaysFood, food].forEach((e, i, arr) => {
    //   if (i > 0 && e.name === arr[i - 1]["name"])
    //     cleanArr.push({
    //       name: e.name,
    //       calories: e.calories,
    //       quantity: e.quantity + arr[i]["quantity"]
    //     });
    //   else cleanArr.push(e);
    // });
    const dedupArr = [];
    // const sortTodaysFood = [...this.state.todaysFood, food].sort((a, b) => a.name.localeCompare(b.name));
    [...this.state.todaysFood, food].reduce((acc, el) => {
      if (acc.findIndex(item => el.name === item.name) === -1) {
        dedupArr.push(el);
        acc.push(el);
      } else {
        const index = acc.findIndex(item => el.name === item.name);
        acc[index].quantity += el.quantity;
      }
      return acc;
    }, []);

    this.setState({
      todaysFood: dedupArr
    });
  };

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="is-size-3">IronNutrition</h1>

            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <SearchBar filterFood={this.filterFood} />
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <button className="button is-light" onClick={this.displayAddForm}>
                    Add Food
                  </button>
                </div>
              </div>
            </nav>

            {this.state.addFoodFormIsVisible && <AddFoodForm addFood={this.addFood} />}

            <div className="columns">
              <div className="column">
                <FoodList foods={this.listFoods()} addToTodaysHandler={this.addToTodaysHandler} />
              </div>
              <div className="column">
                <TodaysFood todaysFood={this.state.todaysFood} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
