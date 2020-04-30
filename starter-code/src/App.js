import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood'
import Search from './components/Search'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foods, 
      showForm: false,
      todayFood: [],
    }
    this.addFood = this.addFood.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.filterFood = this.filterFood.bind(this)
    this.addTodaysFood = this.addTodaysFood.bind(this)
    this.deleteFood = this.deleteFood.bind(this)
  }

  addFood(food) {
    const newFoods = [...this.state.foods]
    newFoods.push(food)

    this.setState({
      foods: newFoods
    })
  }

  toggleForm(){
    this.setState({
      showForm: !this.state.showForm
    })
  }

  filterFood(searchLetters) {
    const filteredFood = foods.filter(food=> {
      return food.name.includes(searchLetters)
    })

    this.setState({
      foods: filteredFood
    })
  }

  addTodaysFood(food) {
    const newTodayFood = [...this.state.todayFood]
   
    let foundFood = false;

    newTodayFood.forEach (newFood => {
      if(newFood.name === food.name) {
        newFood.quantity += +food.quantity;
        foundFood = true;
      } 
    })
    if(!foundFood) {
      newTodayFood.push(food)
    }


    this.setState({
      todayFood: newTodayFood
    })
  }

  deleteFood(idx) {
    const newTodayFoods = [...this.state.todayFood]

    newTodayFoods.splice(idx, 1)

    this.setState ({
      todayFood: newTodayFoods
    })
  }

  render() {
    return (
      <div className="App">
        <Search filterFood={this.filterFood}/>
        <br/>
        <button onClick={this.toggleForm}>Add new food</button>
        <div className='columns'>
          <div className='column'>
        {this.state.showForm && <AddFood addFood={this.addFood} toggleForm={this.toggleForm}/>}
        {this.state.foods.map(food => {
          return <FoodBox {...food} addTodaysFood={this.addTodaysFood}/>
        })}
        </div>
        <div className='column'>
          <h1>Today's Foods</h1>
          {this.state.todayFood.map((food, idx) => {
          return <p>{food.quantity} {food.name} {food.calories*food.quantity} cal <button onClick={() => this.deleteFood(idx)}>delete</button></p>
          })}
          <p>Total: {this.state.todayFood.reduce((acc, food) => {
            return acc += food.calories * food.quantity
          }, 0)} cal</p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
