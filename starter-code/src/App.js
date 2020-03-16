import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox/FoodBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        {foods.map((food, id) => {
          return <FoodBox key={id} food={food} />;
        })}
      </div>
    );
  }
}

export default App;
