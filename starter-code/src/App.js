import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import Form from "./Form";
import Input from "./Input";
class App extends Component {
  state = {
    allFoods: foods,
    foods,
    open: true,
    selectedFood: []
  };

  switchMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  addFood(newFood) {
    let clonedFoods = [...this.state.foods];
    clonedFoods.push(newFood);
    this.setState({ ...this.state, foods: clonedFoods, allFoods: clonedFoods });
    // food.push(newFood);
  }

  searchFood(e) {
    let search = e.target.value;
    let currentList = [];
    let newList = [];
    if (search !== "") {
      currentList = this.state.allFoods;
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = search.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.allFoods;
    }
    this.setState({
      foods: newList
    });
  }

  addToSelectedFood(food) {
    let clonedFoods = [...this.state.selectedFood];
    clonedFoods.push(food);
    this.setState({ ...this.state, selectedFood: clonedFoods });
  }

  render() {
    return (
      <div id="root">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
            <Input function={search => this.searchFood(search)}> </Input>
          </div>
          <div>
            <button onClick={() => this.switchMenu()}>
              {this.state.open ? "Close" : "Open"} form
            </button>
            {this.state.open && (
              <div className="contents">
                <Form function={newFood => this.addFood(newFood)}></Form>
              </div>
            )}
          </div>
          <div className="columns">
            <div className="column">
              <div className="App">
                {this.state.foods.map(food => (
                  <FoodBox
                    addSelectedFood={() => this.addToSelectedFood(food)}
                    calories={food.calories}
                    name={food.name}
                    image={food.image}
                  ></FoodBox>
                ))}
              </div>
            </div>
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {this.state.selectedFood.map(food => (
                <li>
                  {food.quantity} {food.name} = {food.calories} cal
                </li>
              ))}
            </ul>
            <strong>Total: 700 cal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
