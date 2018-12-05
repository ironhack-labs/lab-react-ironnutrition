import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox/FoodBox";
import Form from "./components/Form/Form"
import Search from "./components/Search/Search"

class App extends Component {
  constructor() {
    super();
    this.baseFoods = foods
    this.state = {
      foods: this.baseFoods,
      formShow: false
    };
  }
  switchState = () => {
    let show = !this.state.formShow
    this.setState({ formShow: show });
  };

  addNewFood = (newFood) => {
    // let newArray = [...this.state.foods]
    this.baseFoods.push(newFood)
    this.setState({foods: this.baseFoods})
    this.switchState();
  };

  filterFood = (searchFood) => {
    this.state.foods = this.baseFoods    
    let newArray = this.state.foods.filter((element)=>element.name.includes(searchFood))
    this.setState({foods: newArray})
  }
  

  render() {
    let displayStr;

        if (this.state.formShow) {
            displayStr = "block"
        }   else {
            displayStr = "none"
        }
        
    return (
      <div className="App">
        <Search filtering={this.filterFood}/>
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
