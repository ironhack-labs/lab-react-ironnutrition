import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json'
import FoodBox from './components/FoodBox';
import TodayFoodBox from './components/TodayFoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import shortid from "shortid";

function importFoods(foodArray) {
  let updatedArray = []
  foodArray.forEach(food => {
    food.id = shortid.generate()
    updatedArray.push(food)
  });
  return updatedArray
}

const updatedFoods = importFoods(foodsJSON);
console.log(updatedFoods)

class App extends Component {
   
  state = {
    foods : updatedFoods,
    foodsDisplay: updatedFoods,
    todaysFoods: [],
    showAddForm: false,
    calAmount: 0
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
    todaysFoodsCopy.push(foodObj)
    let calAmount = 0
    todaysFoodsCopy.map((oneFood) => {
      calAmount += oneFood.calories * oneFood.quantity;
      })
    this.setState( {todaysFoods: todaysFoodsCopy, calAmount})
    
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
            <h2>Todays amout of calories: <span id="totalCalField">{this.state.calAmount}</span></h2>
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
