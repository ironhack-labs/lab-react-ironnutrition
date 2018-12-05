import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox/FoodBox'
import NewFoodForm from './components/NewFoodForm/NewFoodForm'
import InputForm from './components/InputForm/InputForm'

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: foods, 
      isFormVisible: false, 
      wordToSearch: '', 
      list: []
    }
  }

  changeFormVisibility = () => {
    this.setState({...this.state, isFormVisible: !this.state.isFormVisible})
  }

  addFood = (food) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);

    this.setState({...this.state, foods: foodsCopy})
  }

  searchFoods = (e) => {
    this.setState({...this.state, wordToSearch: e.target.value})
  }

  generateFoods = () => this.state.foods.map(food => 
    (food.name.match(new RegExp(this.state.wordToSearch, "i"))) && <FoodBox {...food} addToCart={this.addToCart} />)

  generateList = () => {
    this.reduceList(this.state.list);
    return this.reduceList(this.state.list).map((item, index) => 
    <li><span>{item.quantity}</span> <span>{item.name}</span> = <span>{item.quantity * item.calories}</span> cal <button className="button is-small" onClick={(e) => this.deleteFromList(index)}>Delete</button></li>)
  }

  deleteFromList = (index) => {
    const listCopy = [...this.state.list];
    listCopy[index].quantity--;

    if (listCopy[index].quantity === 0) listCopy.splice(index, 1)

    this.setState({...this.state, list: listCopy});
  }

  reduceList(list) {
    let newList = {};

    list.forEach(item => {
      (newList[item.name]) ? newList[item.name].push(item) : newList[item.name] = [item]
    })
    
    for (let food in newList) {
      newList[food] = newList[food].reduce((acc, act) => {
        return {
          name: act.name,
          quantity: +acc.quantity + (+act.quantity),
          calories: act.calories
        }
      })
    }
    
    let arrayList = [];

    for (let food in newList) {
      arrayList.push(newList[food]);
    }

    return arrayList;
  }

  getTotalCalories = () =>  this.state.list.length ? this.state.list.reduce((acc, act) => acc + (act.quantity * act.calories), 0) : 0;

  addToCart = (name, calories, quantity) => {
    let listCopy = [...this.state.list];
    listCopy.push({name, quantity, calories});
    
    listCopy = this.reduceList(listCopy)

    this.setState({...this.state, list: listCopy})
  }




  render() {
    return (
      <div className="App container">
        <h1 className="title">IronNutrition</h1>

        <InputForm name="search" type="text" placeholder="Search..." handleChange={this.searchFoods} />

        <div className="columns">
          <div className="column">
            {this.generateFoods()}
          </div>
          <div className="column container">
            
            {this.state.isFormVisible ? <NewFoodForm closeForm={this.changeFormVisibility} addFood={this.addFood} /> : <button className="button is-primary"onClick={this.changeFormVisibility}>Add Food</button>}

            <h2 class="subtitle">Today's foods</h2>

            <ul>{this.generateList()}</ul>
            <p>Total: {this.getTotalCalories()} cal</p>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
