import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox/FoodBox';
import Food from "./foods.json";
import FoodForm from "./components/FoodForm/FoodForm";
import Search from "./components/Search/Search";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        foods: Food,
        show: false
    }
    this.addFood = () => {
      this.setState({showForm: !this.state.showForm})
  }
  this.addFoodArray = this.addFoodArray.bind(this)
}

  addFoodArray(e,state){
    e.preventDefault()
    let arr = [...this.state.foods]
    arr.push(state);
    this.setState({foods:arr})
  }

  render() {
    return (
      <div className="App">
       <Search /> 
       <button onClick={this.addFood}>Add A Dish</button>
      {this.state.showForm && <FoodForm addFoodArray={this.addFoodArray}/> }
      {this.state.foods.map(x=><FoodBox food={x}/>)}
      </div>
    );
  }
}

export default App;

