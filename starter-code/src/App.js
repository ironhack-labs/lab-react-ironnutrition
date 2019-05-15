import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from "./components/foodbox"
import Form from "./components/foodform";
import Searchbar from "./components/searchbar"

class App extends Component {

  state = {
    food: foods,
    formopen: false,
    filterFoods: foods,
    todayFoods: {}
  }

  toggleForm = () => {
    console.log("Ive been clicked!")
    console.log(this.state.formopen)
    this.setState({
      formopen: !this.state.formopen
    });
  }
  
  addAFoodItem =  (food) => {
    console.log(food)
    let newFoodList = [...this.state.filterFoods]
    newFoodList.push(food)
    this.setState({
      filterFoods:newFoodList
    })
  }

  searchFoodItem =  (fooditem) => {
    let newfoodlist = [...this.state.food]
    console.log("this is the type", fooditem)
      let filteredFood = newfoodlist.filter((item)=>{
        console.log("these are the items",fooditem.target.value)
      return item.name.toLowerCase().includes(fooditem.target.value.toLowerCase())
    })
    this.setState({
      filterFoods: filteredFood
    })
  }

  addFunction = (e) => {
   // this.state.todayFoods.push(e)
    console.log(e.target)
  }


  addItemsToAppJSState = (food) => {
    //console.log("=====>>>>",food)
    //this.state.todayFoods.push(food)
    ////this.setState({
    ////  todayFoods: food
    ////})
    //console.log(this.state.todayFoods)
  let foodlist = {...this.state.todayFoods}
  foodlist[ food.name ] = food
    this.setState({
      todayFoods: foodlist
    })
  }

  showFoodlist = () => {
    let foodlistCopy = {...this.state.todayFoods}
    return Object.keys(foodlistCopy).map(function(key) {
      return <ul value={key}>
        <li>{foodlistCopy[key].name}</li>
        <li>{foodlistCopy[key].calories}</li>
        <li>{foodlistCopy[key].quantity}</li>
      </ul>
    });
  }

countTotal = () => {
  let total = 0;
  console.log(this.state.todayFoods)
  let foodlistCopy = {...this.state.todayFoods}
  for(let key in foodlistCopy){
    total += Number(foodlistCopy[key].calories)
  }
  return total
}

  render() {




    console.log(this.state.food)

    let fooditems = this.state.filterFoods.map((fooditem, i) => {
     return <Foodbox key={i} addItemsToAppJSState={this.addItemsToAppJSState} food={fooditem.name} imageurl={fooditem.image} calories={fooditem.calories} add={this.addFunction} name={fooditem.name}/>
    })


    return (
      <div className="App">
        <Searchbar Search={this.searchFoodItem}/>
        <button onClick={this.toggleForm} class="newfoodbut">New Food</button>
        <Form show={this.state.formopen} addAFoodItem={this.addAFoodItem}/>
        {this.showFoodlist()}
        Total: {this.countTotal()}
        {fooditems}
      </div>
    );
  }
}

export default App;
