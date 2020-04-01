import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import FoodForm from "./components/FoodForm";

class App extends Component {
    state = {
      foodsArr: foods,
      showForm: false
    }
//Addfood --> imprime los foodform (poner componente dentro de una función)
addForm = () => {
  this.setState ({showForm: !this.state.showForm})
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ironnutrition</h1>
        </header>
        <p className="App-intro"></p>
        <button onClick={this.addForm}>{!this.state.showForm ? "Add new food" : "Hide form"}</button>
        {this.state.showForm ? <FoodForm addFood={this.handleFormSubmit}/> : null}
        {
          this.state.foodsArr.map((e,i) => {
          return <FoodBox key={i}
            name={e.name}
            calories={e.calories}
            image={e.image}
            quantity={e.quantity}
          ></FoodBox>
          })
        }
      </div>
    );
  }
}

export default App;
