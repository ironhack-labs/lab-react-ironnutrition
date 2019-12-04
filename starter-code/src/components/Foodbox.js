import React, { Component } from "react";
import Food from "./Food";
import foods from "../foods.json";
import { Link } from "react-router-dom";

class Foodbox extends Component {
  constructor() {
    super();
    this.state = {
      food: [...foods], // how do we bring newFoodList here??
      BackUP: [...foods]
    };
  }

  searchBar = e => {
    this.state.food = [...foods];
    let filterFood = this.state.food.filter(elm =>
      elm.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    this.setState({ food: filterFood });

    //.indexof(e.target.value))
    //console.log(elm.name)
  };

  //alert("holis")
  // console.log(e.target.value)

  render() {
    return (
      <div>
        <Link to={"/form"}>Add Food</Link>

        <div className="field has-addons">
          <div className="control">
            <input
              name="search"
              id="input5"
              className="input"
              type="text"
              placeholder="search"
              onChange={this.searchBar}
            />
          </div>
          <div className="control"></div>
        </div>

        {this.state.food.map((props, idx) => {
          return <Food key={idx} {...props} />;
        })}
      </div>
    );
  }
}

export default Foodbox;
