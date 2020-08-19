import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search'

class App extends React.Component {


  state = {
    foods: foods,
    filteredFoods: foods,
    todayFoods: [],
    wantsToAdd: false
  }

  handleAddFood = (event) => {
    event.preventDefault()
    let foodName = event.currentTarget.food.value
    let foodCal = event.currentTarget.calories.value
    let foodImg = event.currentTarget.image.value
    let newFoods = [{name: foodName, calories: foodCal, image: foodImg}, ...this.state.foods]
    this.setState({
      foods: newFoods,
      wantsToAdd: !this.state.wantsToAdd
    })
  }

  handleShowAdd = () => {
    this.setState({
      wantsToAdd: !this.state.wantsToAdd
    })
  }

  handleSearch = (event) => {
    let searchFood = event.currentTarget.value;
    let cloneFoods = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(searchFood.toLowerCase())
    })
    this.setState({
      filteredFoods: cloneFoods
    })
  }


  handleAddToToday = (id, quantity) => {
    let foodToAdd = this.state.foods[id]
    foodToAdd.quantity = quantity;


  
    this.setState({
      todayFoods: [...this.state.todayFoods, foodToAdd],

    })
  }
  






  render(){
    return (
      <div className="App">
      <div className="columns">
      <div className="column">
        {this.state.wantsToAdd && <AddFood onAdd={this.handleAddFood}/>}
        {!this.state.wantsToAdd && <button onClick={this.handleShowAdd} 
        className="button">Add Food</button>}
        <Search search={this.handleSearch}/>
        {
          this.state.filteredFoods.map((food, i) => {
            return <FoodBox key={i} id={i} food={food} add={this.handleAddToToday} changeAmount={this.handleChangeAmount}/>
          })
        }
        </div>
        <div className="column">
          <h2>Today's foods</h2>
          {
            this.state.todayFoods.map((food, i) => {
                return <p key={i}>{food.quantity} {food.name} = {food.calories*food.quantity} cal</p>
            })
          }
          <p>Total cals:</p>
          {
            this.state.todayFoods.reduce((acc, food) => {
              return acc + food.calories*food.quantity
            }, 0)
          }
          
        </div>
        </div>
      </div>
    );
  }

  
}

export default App;
