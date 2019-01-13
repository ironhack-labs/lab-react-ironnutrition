import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import { Header } from "./components/Header";
import FoodBox from "./components/FoodBox";
import Modal  from "./components/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodArr: foods
    };
  }

  handleAdd(newFood){
    this.state.foodArr.push(newFood);
    this.setState({foodArr:this.state.foodArr})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Modal add={(newFood)=>this.handleAdd(newFood)}/>
        <div className="section">
          <div className="columns">
            <div className="column">
            {this.state.foodArr.map(food => (
          <FoodBox key={food.name} food={food} />
        ))}
        </div>
            <div className="column"></div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default App;
