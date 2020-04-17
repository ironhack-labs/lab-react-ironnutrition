import React, { Component } from "react";
import Foods from "../../foods.json";
import "bulma/css/bulma.css";
import "./FoodBox.css";
import AddFood from "../AddFood/AddFood.js";
import RenderFood from "../RenderFood/RenderFood";
import Today from "./../Today/Today.js";

class FoodBox extends Component {
  state = {
    all: Foods,
    search: "",
    today: [],
  };

  addToArray = (input) => {
    this.setState({
      all: [...this.state.all, input],
    });
  };

  search = (e) => {
    let keyword = e.target.value;
    this.setState({ search: keyword });
    console.log(this.state.search);
  };

  handleToUpdate = (newFoodToday) => {
    console.log("add a new fodd",newFoodToday )
    this.setState({
      today: [...this.state.today, newFoodToday]
    })
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <AddFood click={this.addToArray} />
          <div className="box">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Find an ingredient"
                  onChange={this.search}
                />
              </div>
              <div className="control">
                <a className="button is-info">Search</a>
              </div>
            </div>
          </div>
          <div>
            <RenderFood handleToUpdate = {this.handleToUpdate} 
              list={this.state.all.filter((data) => {
                if (this.state.search == null) {
                  return data;
                } else if (
                  data.name
                    .toUpperCase()
                    .includes(this.state.search.toUpperCase())
                ) {
                  return data;
                }
              })}
            />
          </div>
        </div>
        <div className="column">
          <Today todaysFood={this.state.today} className="box" />
        </div>
      </div>
    );
  }
}
export default FoodBox;
