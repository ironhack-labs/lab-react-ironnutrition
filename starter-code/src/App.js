import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import TodayFoodBox from './components/TodayFoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import shortid from "shortid";

class App extends Component {
  importFoods = (foodArray) => {
    let updatedFoods = []
    foodArray.forEach(food => {
      food.id = shortid.generate()
      updatedFoods.push(food)
    });
    return updatedFoods
  }
  state = {
    foods : this.importFoods(foods),
    foodsDisplay: this.state.foods,
    todaysFoods: [],
    showAddForm: false
  }
  addFood = (foodObj) => {
    const foodsCopy =  [...this.state.foods];
    foodsCopy.push(foodObj)
    this.setState( {foods: foodsCopy})

    const foodsCopy2 =  [...this.state.foodsDisplay];
    foodsCopy2.push(foodObj)
    this.setState( {foodsDisplay: foodsCopy2})

  }

  addTodayFood = (foodObj) => {
    const todaysFoodsCopy =  [...this.state.todaysFoods];
    console.log('foodObj', foodObj)
    console.log('todaysFoodsCopy', todaysFoodsCopy)
    todaysFoodsCopy.push(foodObj)
    console.log('todaysFoodsCopy after PUSH', todaysFoodsCopy)
    this.setState( {todaysFoods: todaysFoodsCopy})
    console.log("from the state ", this.state.todaysFoods)
  }


  filterList = (query) => {
    let foodsCopy =  [...this.state.foods]
    foodsCopy = foodsCopy.filter(food => food.name.toLowerCase().includes(query.toLowerCase()))
    this.setState( {foodsDisplay: foodsCopy})
  }

  toggleAddForm = () => {
    this.setState({ showAddForm: !this.state.showAddForm });
  };
    
  render() {
    return (
      <div className="App">
      <h1 className="Header">FoodBank</h1>
        <Search filterList={this.filterList}/>
        <button onClick={this.toggleAddForm} >Toggle Addform</button>
        {this.state.showAddForm ? <AddFood addFood={this.addFood} toggleAddForm={this.toggleAddForm}/> : null}
        
        <div className="listsContainer">
          <div className="allFoodBox list" >
            {this.state.foodsDisplay.map((oneFood) => {
              return <FoodBox food={oneFood} addTodayFood={this.addTodayFood}/>
            })}
          </div>

          <div className="todayFoodBox list">
            {this.state.todaysFoods.map((oneFood) => {
              return <TodayFoodBox food={oneFood} />
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
