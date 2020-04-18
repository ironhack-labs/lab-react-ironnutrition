import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/food/FoodBox.js";
import AddFood from "./components/addFood/AddFood.js";
import SearchBar from "./components/searchBar/SearchBar.js";

class App extends Component {
  state = {
    foods: foods,
    filter: [...foods],
  };

  handleAddAFood = (newFood) => {
    const { foods } = this.state;
    this.setState({
      filter: [...foods, newFood],
    });
  };

  handleFilter = (el) => {
    const { foods } = this.state;
    this.setState({
      filter: foods.filter((element) =>
        element.name.toLowerCase().includes(el.toLowerCase())
      ),
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <div className="container">
          <SearchBar onChange={this.handleFilter} />
          <AddFood AddAfood={this.handleAddAFood} />
          {filter.map((el, index) => (
            <FoodBox
              key={index}
              name={el.name}
              calories={el.calories}
              img={el.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
