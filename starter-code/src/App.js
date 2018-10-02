import React, { Component } from 'react';
import './App.css';
import FoodBox from "./FoodBox";
import "bulma/css/bulma.css"
import foods from "./foods.json"
import Form from "./Form"
class App extends Component {
  constructor(){
    super()
    this.state={foods:foods.map(e=>{
      e.quantity=1
      e.value=""
      return e
    })}
  }
  addFood=(food)=>{
    this.state.foods.unshift(food)
    this.setState({foods:this.state.foods})
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1> 
        <div>
          <input type="text" className="input search-bar" name="search" placeholder="Search"/>
        </div>
        <div className="columns">
          <div className="column">
          <Form onAddFood={food=>this.addFood(food)}></Form>
          {this.state.foods.map((f)=> <FoodBox key={f.name} {...f}/>)}
          </div>
        </div>
      </div>
    );
  }
}



export default App;
