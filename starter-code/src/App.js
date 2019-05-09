import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Food from "./components/Food"
import foods from "./foods"
import AddFood from "./components/AddFood"
import './App.css';

export let copy = [...foods]

class App extends Component {
  state={
    food:{
      name: "",
      calories: Number,
      image: "",
      quantity: Number
    }
 }

  handleSubmit = e => {
    e.preventDefault()
    copy.push(this.state.food)
    this.setState({foods:copy})
    //this.props.addFood(this.state)
    // this.setState({
    //   name: "",
    //   calories: Number,
    //   image: "",
    //   quantity: Number
    // })
    console.log(copy)
  }

  handleInput = e => {
    const { food } = this.state
    food[e.target.name] = e.target.value
    this.setState({...food})
    console.log(food)
  }

  searchFood = (e) => {
    const query = (e.target.value).toLowerCase()
    const filteredFood = copy.filter(food => ((food.name).toLowerCase()).includes(query))
    this.setState({food:filteredFood})
    copy = filteredFood
    console.log(copy)
    return(copy)
  }

  render() {
    return (
      <div className="App">
      <h1>Iron Nutrition</h1>
      <div class="field">
        <input id="search" class="input is-info" placeholder="Search" onChange={this.searchFood} />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </div>
        <AddFood handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
        <Food food={this.state.food}/>
      </div>
    );
  }
}

export default App;
