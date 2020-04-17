import React, { Component } from "react";
import Foods from "../../foods.json";
import "bulma/css/bulma.css";
import "./FoodBox.css";
import AddFood from "../AddFood/AddFood.js";
import RenderFood from "../RenderFood/RenderFood";

class FoodBox extends Component {
  state = {
    all: Foods,
    search: "",
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

  render() {
    return (
      <div>
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
          <RenderFood
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
    );
  }
}
export default FoodBox;
