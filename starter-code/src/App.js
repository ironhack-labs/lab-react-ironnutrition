import React, { Component } from 'react';
import jsondata from './foods.json'
import './App.css';
import { FoodBox } from './components/FoodBox';
import 'bulma/css/bulma.css'
import AddFood from './components/AddFood';

class App extends Component {
  constructor() {
    super();
    this.state = {
      oldfoods: jsondata,
      foods : jsondata,
      showForm: false
    }
  }
  handleChange = (e) => {
    let newfood = this.state.oldfoods.filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if (!e.target.value) {newfood = this.state.oldfoods}
    this.setState({
      foods: newfood
    })
  }
  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food)
    this.setState({
      foods: foodsCopy
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div>
          <AddFood addFood={this.addFoodHandler} onClick={this.displayForm}>{this.state}</AddFood>
        </div>
        <div>
          <form><input type="text" className="input" value={this.filter} onChange={this.handleChange} placeholder="Search..." /></form>
        </div>
        {this.state.foods.map((e,i)=><FoodBox key={i}>{e}</FoodBox>)}
      </div>
    );
  }
}

export default App;
