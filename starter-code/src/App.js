import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import { Header } from "./components/Header";
import Modal  from "./components/Modal";
import FoodList from './components/FoodList';

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
            <FoodList foodArr={this.state.foodArr}/>
            <div className="column"></div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default App;
