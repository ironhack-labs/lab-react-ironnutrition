import React, { Component } from "react";

import "./App.css";
import "bulma/css/bulma.css";
import food from "./foods.json";
import FoodBox from "./components/FoodBox";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import Menu from "./components/Menu";

class App extends Component {
  //No necesitamos contructor si usamos arrow Functions

  state = {
    foodArray: food,
    menu: [],
    showForm: false,
    filteredFood: [],
  };

  //SearchBar Methods
  onFilter = search => {
    debugger;
    const newFoods = food.filter(food =>
      food.name.toLowerCase().includes(search.toLowerCase()),
    );
    this.setState({
      foodArray: newFoods,
    });
  };

  onChangeMenu = food => {
    let oldMenu = this.state.menu.filter(f => f.name !== food.name);
    let newMenu = [...oldMenu, food];
    this.setState({
      menu: newMenu,
    });
  };

  //For methods
  addFoodHandler = newFood => {
    let newFoods = this.state.foodArray;
    newFoods.push(newFood);

    this.setState({
      foodArray: newFoods,
    });
  };

  deleteFoodItem = item => {
    debugger;
    let newMenuDeleted = this.state.menu.filter(f => f.name !== item);
    this.setState({
      menu: [...newMenuDeleted],
    });
  };

  render() {
    const productList = this.state.foodArray.map((food, index) => (
      <FoodBox {...food} key={index} onChangeMenu={this.onChangeMenu} />
    ));

    return (
      // pintamos la comida
      <div>
        <div className="container margin-top">
          <div className="columns">
            <div className="column is-6">
              <SearchBar onFilter={this.onFilter} />
              {productList}
            </div>
            <div className="column is-3">
              <Form addFood={this.addFoodHandler} />
            </div>

            <div className="column is-3">
              <Menu
                yourMenu={this.state.menu}
                deleteFood={this.deleteFoodItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
