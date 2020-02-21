import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FoodBox from "./components/FoodBox";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Search from "./components/Search";

class App extends Component {
  state = {
    foods: foods,
    search: ""
    // filteredFoods:foods
  };

  filter = e => {
    this.setState({ search: e.target.value });
    // let filteredFoods = this.state.foods.filter(food=> food.name.toUpperCase().match(e.target.value.toUpperCase()))
    // this.setState({filteredFoods:filteredFoods})
  };

  filterArr = () => {
    let filteredFoods = this.state.foods.filter(food =>
      food.name.toUpperCase().match(this.state.search.toUpperCase())
    );
    return filteredFoods;
  };

  render() {
    let allFoodBoxes = this.filterArr().map((food, index) => {
      return <FoodBox key={index} food={food} />;
    });

    return (
      <div className="App">
        <Search handleChange={this.filter} />
        {allFoodBoxes}
      </div>
    );
  }
}

export default App;
