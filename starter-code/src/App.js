import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from "./foods.json";
import FoodBox from "./components/foodbox";
import Form from "./components/form";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      foods: foods,
      showfoods: foods,
      formStyle: {
        display: "none"
      },
      pickedFood: [],
      counter: [],
      sumCalories: []
    }
  }

  addHandler = () => {
    if(this.state.formStyle.display === "none"){
      this.setState({
        formStyle: {
        display: "block"
      }}
      )}
  }

  submitHandler = (e, state) => {
    e.preventDefault();

    this.state.showfoods.push(state);

    this.setState({
      showfoods: this.state.showfoods,
      formStyle: {
        display: "none"
      }
    })
}

searchHandler = (e) => {
        let searchQuery = e.target.value;

        var showfoods = (
            this.state.showfoods.filter(food => (
                food.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
            ))
        )

        this.setState({
            showfoods: showfoods
        })
}

addFoodHandler = (food, state) => {
  var pickedFoodCopy = [...this.state.pickedFood]
  var counterCopy = [...this.state.counter]

  pickedFoodCopy.push(food)
  counterCopy.push(state.count)
  
  this.setState({
    pickedFood: pickedFoodCopy,
    counter: counterCopy
  })

  this.calculateCalories(food.calories, state.count)
}

calculateCalories = (cal, amount) =>{
    var sumCaloriesCopy = [...this.state.sumCalories]
    var calories = cal*amount
    sumCaloriesCopy.push(calories)
    this.setState({
      sumCalories: sumCaloriesCopy
    })
}

  render() {
    let sum = 0;

    for (let i = 0; i < this.state.sumCalories.length; i++) {
      sum += this.state.sumCalories[i];
    }

    return (
      <div className="App">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input type="text" className="input search-bar mx-auto my-2" name="search" placeholder="Search" onChange={this.searchHandler}></input>
        </div>
        <button onClick={this.addHandler}>Add New Food</button>
        <Form style={this.state.formStyle} submitHandler={this.submitHandler} />
        <div className="d-flex">
        <div>
        {this.state.showfoods.map((food, index) => (
          <FoodBox name={food.name} addFoodHandler={this.addFoodHandler} calories={food.calories} image={food.image} key={index}/>
        ))}
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
          {this.state.pickedFood.map((food, index)=> 
            <li>{this.state.counter[index]} {food.name} = {food.calories * this.state.counter[index]}</li>
            )}
          </ul>
          <strong>Total: {sum} cal</strong>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
