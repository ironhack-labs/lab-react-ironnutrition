import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import FoodForm from "./components/FoodForm";


class App extends Component {
  constructor(props) {
    super(props);
    console.log(foods);
    console.log(foods.slice(0, 5));
    this.state = { listFood: foods.slice(0, foods.length) };
  }

  render() {
    return (
      <div className="App">

        <FoodForm />

        {this.state.listFood.map((meal, index) => {
          return <FoodBox 
            meal={meal} 
            key={index} 
            ></FoodBox>;
        })}
      </div>
    );
  }
}

export default App;
