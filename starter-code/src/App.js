import React, { Component } from "react";
import "./App.css";
import "../node_modules/bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import FoodForm from "./FoodForm";
import FoodElement from "./FoodElement";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    foods: foods,
    search: "",
    myFood: []
  };
  addFood = newFood => {
    const copy = [...this.state.foods];
    copy.push(newFood);
    console.log(newFood);
    this.setState({ foods: copy });
  };
  addQuantity = evt => {
    const value = evt.target.value;
    const index = evt.target.id;
    var copy = [...this.state.foods];
    copy[index].quantity = value;
    this.setState({ foods: copy });
    console.log(copy);
  };

  setSearch = e => {
    const s = e.target.value.toUpperCase();
    console.log(s);
    this.setState({ search: s });
  };

  filterFoods(query) {
    const copy = [...this.state.foods];
    var filteredName = copy.filter(food =>
      food.name.toUpperCase().includes(query)
    );
    return filteredName;
  }

  addToMyFood = () => {
    const x = this.state.foods.filter(f => f.quantity > 0);
    this.setState({ myFood: x });
  };

  render() {
    var total = 0;
    console.log(this.state.myFood, "this is my food");
    return (
      <React.Fragment>
        <SearchBar clbk={this.setSearch} />
        <FoodForm clbk={this.addFood} />
        <div id="food-list">
          <div id="bloc1">
            <FoodBox
              clbkClick={this.addToMyFood}
              clbkChange={this.addQuantity}
              foods={this.filterFoods(this.state.search)}
            />
          </div>
          <div id="bloc2">
            <h1>Today's foods</h1>
            <ul>
              <FoodElement food={this.state.myFood} />
            </ul>
            <p>
              <b>Total: </b>
              {this.state.myFood.length &&
                this.state.myFood.reduce((a, v) => {
                  a += v.quantity * v.calories;
                  return a;
                }, 0)}
              calories.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
