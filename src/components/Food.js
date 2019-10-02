import React, { Component } from "react";
import Foodbox from "./Foodbox";
// import foods from "../foods.json"

class Food extends Component {
  addItemFunction = () => {
    this.props.addTodayMeal();
  };

  populateAll = () => {
    return this.props.allFoods.map((eachFood, i) => (
      <Foodbox
        key={i}
        food={eachFood}
        addItemFunction={this.addItemFunction}
      ></Foodbox>
    ));
  };

  render() {
    return <div className="column is-two-thirds">{this.populateAll()}</div>;
  }
}

export default Food;
