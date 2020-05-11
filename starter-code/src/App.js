import React, { Component } from "react";
//CSS
import "./App.css";
import "bulma/css/bulma.css";
//Data
import foods from "./foods.json";
//Components
import Foodbox from "./components/foodbox";

class App extends Component {
  state = {
    foods: foods,
    newFood: {},
    results: [],
    formIsShowed: false,
  };

  handleInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  displayForm = () => {
    this.setState({
      formIsShowed: !this.state.formIsShowed,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.displayForm();
    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      quantity: this.state.quantity,
      image: this.state.image,
    };
    this.setState({
      foods: [...this.state.foods, newFood],
    });
  };


  handleSearchInput = (e) => {
    let { name, value } = e.target;
    const filteredResults = this.state.foods.filter(f=>f.name.includes(value))
    this.setState({ 
      results: filteredResults,
      searchText: value
    });
  };


  render() {
    return (
      <div className="App">
        <div>
          <input
            type="text"
            className ="input search-bar"
            name="searchText"
            placeholder="Search"
            value={this.state.searchText}
            onChange = {(e) => this.handleSearchInput(e)}
          ></input>
        </div>
        {!this.state.formIsShowed && (
          <button className="button is-primary" onClick={this.displayForm}>
            Add New Food
          </button>
        )}
        {this.state.formIsShowed && (
          <form className="food-Form" onSubmit={(e) => this.handleSubmit(e)}>
            <label name="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleInput(e)}
            ></input>
            <label name="calories"> Calories</label>
            <input
              type="number"
              name="calories"
              value={this.state.calories}
              onChange={(e) => this.handleInput(e)}
            ></input>
            <label name="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={(e) => this.handleInput(e)}
            ></input>
            <label name="image">Image</label>
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={(e) => this.handleInput(e)}
            ></input>
            <input type="submit" value="submit"></input>
          </form>
        )}
        {this.state.results.map((element, key) => (
          <Foodbox
            key={key}
            name={element.name}
            calories={element.calories}
            image={element.image}
            quantity={element.quantity}
          />
        ))}
      </div>
    );
  }
}

export default App;
