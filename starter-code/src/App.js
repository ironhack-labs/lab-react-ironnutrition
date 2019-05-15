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
    addedFood: "",
    addedFoodsObj: [],
    quantity: 0
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

    console.log("=============================", e.target.id, "from", e.target);
    this.state.foodsMain.forEach(item => {
      if (item.name === e.target.id) {
        this.state.addedFoodsObj.push(item);
        this.setState({
          // addedFood: e.target.id
          addedFoodsObj: this.state.addedFoodsObj
        });
      }
    });
  };

  addQuantity = e => {
    e.preventDefault();

    console.log(e.target.value);
    if (this.state.quantity > -1) {
      this.setState({ quantity: 0 });
    } else {
      this.setState({
        quantity: Number(e.target.value)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">IronNutrition</h1>
        <SearchBar searchFoods={this.searchFoods} />
        <hr />

        <AddForm
          setNameandCalories={this.setNameandCalories}
          addFood={this.addFood}
        />

        <hr />
        <TodaysFood addedFoodsObj={this.state.addedFoodsObj} />
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
                addQuantity={this.addQuantity}
              />
            );
        })}
      </div>
    );
  }
}

export default App;
