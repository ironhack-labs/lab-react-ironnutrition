import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './components/FoodBox/foodBox'
import Form from './components/Form/form'

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: foods,
      open: false
    }
  }

  switchState = () => {
    this.setState({ open: !this.state.open })
  }

  addFood = (e,state) => {
    e.preventDefault();
    console.log(state);
  
    let newArray = [...this.state.food]
    newArray.push(state);
    this.setState({ food: newArray })
    this.setState({ open: !this.state.open })

  }

  render() {
    return (
      <div className="App">
        {this.state.food.map((food, index) => <Foodbox key={index} foodData={food} />)}
        <button onClick={this.switchState} className="button">Add new foods</button>
        {/* {this.state.open && <Form/>} */}
        <Form addFood={this.addFood} className={this.state.open ? "open" : "close"} />
      </div>
    );
  }
}

export default App;
