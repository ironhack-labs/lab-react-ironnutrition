import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import NewFoodForm from "./NewFoodForm";
import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods,
      addForm: false,
      search: "",
      items: []
    };
    this.toggleAddForm = this.toggleAddForm.bind(this);
    this.addFood = this.addFood.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.addFoodItem = this.addFoodItem.bind(this);
  }

  toggleAddForm() {
    this.setState({ addForm: !this.state.addForm });
  }
  addFood(dataFood) {
    this.setState({ foods: [dataFood, ...this.state.foods], addForm: !this.state.addForm });
  }
  searchValue(value) {
    this.setState({ search: value });
  }
  addFoodItem(value) {
    const items = [...this.state.items];
    const hasItem = items.some(el => el.name === value.name);
    if (!hasItem) {
      items.push(value);
    } else {
      for (let idx = 0; idx < items.length; idx += 1) {
        if (items[idx].name === value.name) {
          items[idx].quantity += value.quantity;
          break;
        }
      }
    }

    this.setState({ items });
  }
  removeItem(index) {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  }
  render() {
    const { search, items } = this.state;
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <Search update={this.searchValue} />
        <div>
          <button onClick={this.toggleAddForm}>New Food</button>
        </div>
        {this.state.addForm ? <NewFoodForm addAction={this.addFood}></NewFoodForm> : null}
        <div className="columns">
          <div className="column">
            {this.state.foods
              .filter(el => RegExp(search, "i").test(el.name))
              .map((item, idx) => (
                <FoodBox
                  key={idx}
                  name={item.name}
                  calories={item.calories}
                  image={item.image}
                  quantity={item.quantity + 1}
                  add={this.addFoodItem}
                ></FoodBox>
              ))}
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {items.map((item, idx) => (
                <li key={idx}>
                  {item.quantity} {item.name} = {item.calories * item.quantity} cal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="button is-danger is-small is-outlined" onClick={() => this.removeItem(idx)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <strong>Total: {items.reduce((acc, item) => (acc += item.calories * item.quantity), 0)} cal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
