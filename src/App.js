import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from "./components/FoodBox"
import AddNewFoods from './components/AddNewFoods';
import Search from "./components/Search"

class App extends Component {

  state = {
    foods: foods,
    filteredFoods: foods,
    todaysFoods: [],
    showForm: false
  }

  handleClick = () => {
    this.setState({
      showForm: true
    })
  }

  handleAddNewFood = (event) => {
    event.preventDefault()

    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value
    }

    this.setState({
      showForm: false,
      foods: [newFood, ...this.state.foods],
      filteredFoods: [newFood, ...this.state.foods]
    })
  }

  handleSearch = (event) => {
    let searchedFood = event.target.value
    const {foods} = this.state
    let filteredFoods = foods.filter((food)=>{
      return food.name.toLowerCase().includes(searchedFood.toLowerCase())
    })

    this.setState({
      filteredFoods: filteredFoods
    })
  }

  handleAddFoods = (addedFood) => {
    this.setState({
      todaysFoods: [addedFood, ...this.state.todaysFoods]
    })
  }

    render(){
      const {showForm} = this.state

      return (
        <div>
        {
          showForm? <AddNewFoods onAddNewFoods={this.handleAddNewFood}/> : <button onClick={this.handleClick} className="button is-info is-light">Add New Food</button>
        }
        <Search onSearch={this.handleSearch}/>
        {
          this.state.filteredFoods.map((food, i)=>{
            return <Foodbox onAddFoods={this.handleAddFoods} key={i} food={food}/>
          })
        }
        <h3>Today's foods</h3>
        {
          this.state.todaysFoods.map((todaysFood, i) => {
            return <p key={i}>{todaysFood.amount} x {todaysFood.food.name} ({todaysFood.food.calories} cal)</p>
          })
        }
        {
          <p>Total: {this.state.todaysFoods.reduce(((acc, todaysFood) => acc + todaysFood.food.calories * todaysFood.amount), 0)} calories</p>
        }
        </div>
      );
    }
  }

export default App;
