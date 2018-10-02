import React, { Component } from 'react';
import './App.css';
import FoodBox from "./FoodBox";
import "bulma/css/bulma.css"
import foods from "./foods.json"
import Form from "./Form"
import Search from "./Search"
class App extends Component {
  constructor(){
    super()
    this.state={foods:foods.map(e=>{
      e.quantity=1
      e.value=""
      e.visible=true
      return e
    })}
  }
  filterFood=(search)=>{
    console.log(search)
    this.state.foods=this.state.foods.map(food=>{
      food.visible=food.name.toLowerCase().includes(search.toLowerCase())
      return food
    })
    this.setState({foods:this.state.foods})
  }
  addFood=(food)=>{
    this.state.foods.unshift(food)
    this.setState({foods:this.state.foods})
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1> 
        <Search onSearch={search=>this.filterFood(search)}/>
        <div className="columns">
          <div className="column">
          <Form onAddFood={food=>this.addFood(food)}></Form>
          {this.state.foods.map((f)=>f.visible && <FoodBox key={f.name} {...f}/>)}
          </div>
        </div>
      </div>
    );
  }
}



export default App;
