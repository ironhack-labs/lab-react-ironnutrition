import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox/FoodBox";
import Form from "./components/Form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      open: false
    };
    this.toggleFormShow = this.toggleFormShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(food){
    let arr = [...this.state.foods]
    arr.push(food)
    this.setState({... this.state, foods:arr})
  }

  toggleFormShow() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">IronNutrition</h1>
        <button className="button button is-primary" onClick={this.toggleFormShow}>Add New Food</button>

{/* Si el open es true, muestrame el Form: */}
        {this.state.open && <Form submitHandler={this.handleSubmit}/>}

        {this.state.foods.map((food, i) => (
          <FoodBox {...food} />
        ))}
      </div>
    );
  }
}

export default App;
