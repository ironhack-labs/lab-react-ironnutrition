import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import AddForm from "./AddForm";
import SearchBar from "./SearchBar";
import TodaysFood from "./todaysFood";

class App extends Component {
  state = {
    foodsMain: foods,
    searchname: "",
    name: "",
    calories: "",
    addedFood: ""
  };

  addFood = e => {
    e.preventDefault();

    let oneFood = {
      name: this.state.name,
      calories: this.state.calories
    };

    let newFoods = [...this.state.foodsMain];
    newFoods.push(oneFood);
    console.log(oneFood);
    this.setState({
      foodsMain: newFoods
    });
  };

  setNameandCalories = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  searchFoods = e => {
    this.setState({
      searchname: e.target.value
    });
  };

  addTodaysFood = e => {
    e.preventDefault();

    console.log(
      "=============================",
      e.target.addname,
      "from",
      e.target
    );
    this.setState({
      addedFood: e.target.addname
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchFoods={this.searchFoods} />
        <hr />

        <AddForm
          setNameandCalories={this.setNameandCalories}
          addFood={this.addFood}
        />

        <hr />
        <TodaysFood />
        {this.state.foodsMain.map((item, i) => {
          if (
            item.name
              .toLowerCase()
              .indexOf(this.state.searchname.toLocaleLowerCase()) === 0
          )
            return (
              <FoodBox
                foods={item}
                key={i}
                addTodaysFood={this.addTodaysFood}
              />
            );
        })}
      </div>
    );
  }
}

export default App;
