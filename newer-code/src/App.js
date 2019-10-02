import foods from "./foods.json";
import FoodBox from "./FoodBox";
import "bulma/css/bulma.css";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    food: foods,
    matchFood : foods
  };
  getFood = () => {
    return this.state.matchFood.map(plate => {
      return (
        <FoodBox image={plate.image} name={plate.name} cal={plate.calories} />
      );
    });
  };
  modalShow = () => {
    document.querySelector("#modal").setAttribute("class", "modal is-active");
  };
  modalHide = () => {
    document.querySelector("#modal").setAttribute("class", "modal");
  };
  handleFormSubmit = (e) => {
    let foodCopy = [...this.state.food];
    let inputValue = document.querySelector("#addnew");
    foodCopy.push({
      name: document.querySelector("#newName").value,
      calories: document.querySelector("#newCal").value,
      image: document.querySelector("#newImg").value,
      quantity: 0
    });
    this.setState({
      food: foodCopy
    });
  };
   searchPlate = () => {
    let search = document.querySelector("#search").value.toLowerCase()
    let searchQuery = this.state.food.filter(a => {
     return a.name.toLowerCase().includes(search)
    });

    this.setState({
      matchFood: searchQuery
    });
  };
  render() {
    return (
      <div>
        <div className="columns header">
          <div className="column">Header</div>
          <div className="column">
            <button onClick={this.modalShow}>Add New Recipe</button>
          </div>
        </div>
        <input
          onChange={this.searchPlate}
          id="search"
          placeholder="Search"
          type="text"
        />
        <div>{this.getFood()}</div>
        <div id="modal" className="modal">
          <div class="modal-background"></div>
          <div class="modal-content">
            <h1>Make new plate:</h1>
            <form id="addnew">
              <label>Name:</label>
              <input
                id="newName"
                name="name"
                class="input"
                type="text"
                placeholder="Text input"
              />

              <label>Colories:</label>
              <input
                id="newCal"
                name="calories"
                class="input"
                type="text"
                placeholder="Text input"
              />

              <label>Image URL:</label>
              <input
                id="newImg"
                name="image"
                class="input"
                type="text"
                placeholder="Text input"
              />
            </form>
            <button onClick={this.handleFormSubmit}>Submit</button>
          </div>
          <button
            onClick={this.modalHide}
            class="modal-close is-large"
            aria-label="close"
          ></button>
        </div>
      </div>
    );
  }
}
export default App;
