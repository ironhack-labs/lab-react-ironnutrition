import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./Components/FoodBox";
import Accordion from "./Components/Accordion";

class App extends Component {
  state = {
    allFoods: foods,
    foods: foods,
    open: false
  };

  addFood(e, newFood) {
    e.preventDefault();
    let newState = {
      ...this.state
    };
    newState.foods.unshift(newFood);
    newState.open = false;
    this.setState(newState);
  }

  clickToOpen() {
    this.setState({ open: true });
  }

  searchFood(e) {
    let newList = [];
    if (e.target.value !== "") {
      const filteredFood = [...this.state.foods];

      newList = filteredFood.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      newList = this.state.foods;
    }
    this.setState({
      allFoods: newList
    });
  }

  render() {
    return (
      <div className="App">
        <input
          onChange={e => this.searchFood(e)}
          className="input"
          type="text"
          placeholder="Text input"
        />

        <button onClick={() => this.clickToOpen()}>Add new Food</button>
        {this.state.open && (
          <Accordion
            clickToOpen={() => this.switchMenu()}
            clickToSubmit={(e, newFood) => this.addFood(e, newFood)}
          ></Accordion>
        )}
        {this.state.allFoods.map((food, idx) => {
          return (
            <FoodBox
              key={idx}
              id={idx}
              name={food.name}
              calories={food.calories}
              image={food.image}
            ></FoodBox>
          );
        })}
      </div>
    );
  }
}

export default App;
