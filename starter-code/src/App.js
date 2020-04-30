import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import FormInput from './components/FormInput';
import AddFood from './components/AddFood';
import TodaysList from './components/TodaysList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showForm: false,
      foods: foods,
      filteredFoods: foods,
      todaysList: [],
    }

    this.handleForm = this.handleForm.bind(this);
    this.newFood = this.newFood.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.AddToToday = this.AddToToday.bind(this);
    this.removeItem = this.removeItem.bind(this);

  }

  handleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  newFood(food) {
    this.setState({
      filteredFoods: [food, ...this.state.filteredFoods]
    })
  }

  handleSearch(e) {
    let foods = this.state.foods
    let regex = new RegExp(e.target.value, 'gi')
    let filteredArr = foods.filter(food => regex.test(food.name))
    this.setState({
      filteredFoods: filteredArr
    })
  }


  AddToToday(name, quantity, calories){
    let newArr = this.state.todaysList;
    console.log(newArr, name, quantity, calories)
    // console.log(newArr.includes({name:name}))
    for (let i = 0; i < newArr.length; i += 1){
      if (newArr[i].name === name){
        newArr[i].calories += calories
        newArr[i].quantity += +quantity
        this.setState({
          todaysList: newArr
        })
        return
      } 
    }
    newArr.push({
      name,
      quantity,
      calories
    })
    this.setState({
      todaysList: newArr
    })
  }

  removeItem(id) {
    let newArr = this.state.todaysList;
    this.setState({
      todaysList: newArr.filter((item, idx) => idx !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <nav class="nav">
          <h2 class="nav__title">IronNutrition</h2>
          <div class="nav__input-container">
            <FormInput handleChange={this.handleSearch} name='search' type='text' />
            <button class="button nav__btn" onClick={this.handleForm} >{ this.state.showForm ? 'Close form' : "Add food" }</button>
          </div>
        </nav>
        {this.state.showForm ? <AddFood newFood={this.newFood} /> : null }
        <main className="main">
          <div className="food-list">
            {this.state.filteredFoods.map((foods, idx ) => <FoodBox AddToToday = {this.AddToToday} key={idx} foods={foods} /> )};
          </div>
          <TodaysList removeItem={this.removeItem} info={this.state.todaysList} />
        </main>
      </div>
    );
  }
}

export default App;
