import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Foodbox from "./components/Foodbox";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Form from "./components/form";
import foods from "./foods.json";
import { Redirect } from 'react-router'


class App extends Component {
  constructor() {
    super();
    this.state = {
      food: [...foods]
    };
  }


  addFood = food => {
    const foodCopy2 = [...this.state.food];
    foodCopy2.push(food);
    this.setState({ food: foodCopy2 })
  };

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Switch>
          <Route exact path="/" render={() => <Foodbox newFoodList={this.state.food}></Foodbox>} />
          <Route path="/form" render = {() => <Form includesFood={this.addFood} /> } />
        
        </Switch>
      </div>
    );
  }
}

export default App;
