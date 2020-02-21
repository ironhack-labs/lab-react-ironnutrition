import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodList from "./components/FoodList";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";
import TodaysFood from "./components/TodaysFood";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faTrashAlt);

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
    const dedupArr = [];
    [...this.state.todaysFood, food].reduce((acc, el) => {
      if (acc.findIndex(item => el.name === item.name) === -1) {
        dedupArr.push(el);
        acc.push(el);
      } else {
        const index = acc.findIndex(item => el.name === item.name);
        acc[index].quantity = Number(acc[index].quantity) + Number(el.quantity);
      }
      return acc;
    }, []);

    this.setState({
      todaysFood: dedupArr
    });
  };

  deleteHandler = item => {
    this.deleteTodaysFoodItem(item);
  };

  deleteTodaysFoodItem = name => {
    const index = this.state.todaysFood.findIndex(el => el.name === name);
    if (index >= 0) this.state.todaysFood.splice(index, 1);
    this.setState({
      todaysFood: [...this.state.todaysFood]
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

            <div className="columns">
              <div className="column">
                <FoodList foods={this.listFoods()} addToTodaysHandler={this.addToTodaysHandler} />
              </div>

              <div className="column">
                <TodaysFood todaysFood={this.state.todaysFood} deleteHandler={this.deleteHandler} />
              </div>
              {this.state.addFoodFormIsVisible && (
                <div className="column">
                  <AddFoodForm addFood={this.addFood} />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
