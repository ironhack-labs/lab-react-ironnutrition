import React, { Component } from "react";
import Foodbox from "./Foodbox";
// import foods from "../foods.json"

class Food extends Component {


  populateAll = () => {
    return this.props.allFoods.map((eachFood, i) => (
      <Foodbox key={i} food={eachFood}></Foodbox>
    ));
  };

  render() {
    return <div className="column">{this.populateAll()}</div>;
  }
}

export default Food;
