import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox/FoodBox";
import Form from "./components/Form/Form"

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: foods,
      formShow: false
    };

    
  }
  switchState = () => {
    let show = !this.state.formShow
    this.setState({ formShow: show });
  };

  addNewFood = (newFood) => {
    // console.log(newFood)
    let newArray = [...this.state.foods]
    newArray.push(newFood)
    console.log(newArray)
    this.setState({foods: newArray})
    this.switchState();
    // console.log(this.state)
  };

  

  render() {
    let displayStr;

        if (this.state.formShow) {
            displayStr = "block"
        }   else {
            displayStr = "none"
        }
        
    return (
      <div className="App">
        {this.state.foods.map(food => (
          <FoodBox {...food} />
        ))}
        <button className="button is-info" onClick={this.switchState}>Show/Hide Form</button>
        <div style={{display:displayStr}}>
          <Form response={this.addNewFood}/>
        </div>
      </div>
    );
  }
}

export default App;
