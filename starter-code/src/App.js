import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArray from './foods.json';
import FoodBox from './components/FoodBox.js';
import AddFood from './components/AddFood.js';
import Search from './components/Search.js';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      foodsOriginal: foodsArray,
      foods: foodsArray,
      foodsFilter: [],
      showForm: false,
      showAllFoods: true,
    }

   this.getNewFood = this.getNewFood.bind(this);
  this.toggleForm = this.toggleForm.bind(this);
  this.searchFood = this.searchFood.bind(this);
  this.toggleSearch = this.toggleSearch.bind(this)


  }

  getNewFood(food) {
    const foodsCopy = [...foodsArray];
    foodsCopy.push(food)
    this.setState({
      foods: foodsCopy,
    })
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm,
    })
  }

  searchFood(userInput){
    const filteredArray = this.state.foods.filter(element => {
       return element.name.toLowerCase().includes(userInput.toLowerCase())
    })
    this.setState({
      foodsFilter: filteredArray,
    })
  }

  toggleSearch(userInput){
    console.log(userInput)
    if(userInput){
      this.setState({
        showAllFoods: false,
      })
    } else {
      this.setState({
        showAllFoods: true,
      })
    }
  }

  render() {
    return (
      <div className="App">
      <Search toggleFilter={this.toggleSearch} search={this.searchFood}/>
      
      {this.state.showAllFoods ?
        this.state.foods.map((eachFood, idx) =>{
        return <FoodBox foodsProps={eachFood} key={idx}/>
        })
      :
        this.state.foodsFilter.map((eachFood, idx) =>{
        return <FoodBox foodsProps={eachFood} key={idx}/>
        })
      }

      <button onClick={this.toggleForm}> Add Food</button>
      {this.state.showForm ? <AddFood newFood={this.getNewFood} toggleSubmit={this.toggleForm}/> : <p> No form! </p>}

      </div>
    );
  }
}

export default App;
