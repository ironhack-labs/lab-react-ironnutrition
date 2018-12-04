import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox/FoodBox.js";
import Form from "./components/Form/Form.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods ,
      formShow : false
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  switchState = () => {
    this.setState({formShow: !this.state.formShow})
}

handleSubmit(food){
  let arr = [...this.state.foods]
  console.log(arr);
  arr.push(food)
  this.setState({... this.state, foods:arr})
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {//con map recorro foods y pinto el componente FoodBox tantas veces como elementos tenga y admés con spread operator le paso al compenete todas las propiedades.
        this.state.foods.map((food, i) => (
          <FoodBox {...food} />
        ))
        }
        <button onClick={this.switchState} >Add New Food</button>
        {this.state.formShow && <Form submitHandler={this.handleSubmit} /> }
      </div>
    );
  }
}

export default App;
