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
    food.quantity = 1;
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
    const todaysFoodsCopy = [...this.state.todaysFoods];
    let foodIndex = -1

    // determine, if food is already on the list, if yes just updated qty
    if (todaysFoodsCopy && todaysFoodsCopy.length >0) {
      foodIndex = todaysFoodsCopy.findIndex(food => food.id === foodObj.id)
    }
    if (foodIndex === -1) todaysFoodsCopy.push(foodObj)
    else {
      todaysFoodsCopy[foodIndex].quantity = parseInt(todaysFoodsCopy[foodIndex].quantity) + parseInt(foodObj.quantity)
    }
    
    //calculate total amount of all items on list
    let calAmount = this.calcCal(todaysFoodsCopy);

    this.setState( {todaysFoods: todaysFoodsCopy, calAmount})
    //TodayFoodBox.forceUpdate()
  }

  calcCal = (array) => {
    let calAmount = 0
    array.map((oneFood) => {
      calAmount = parseInt(calAmount) + parseInt(oneFood.calories) * parseInt(oneFood.quantity);
      })
    return calAmount
  }

  filterList = (query) => {
    let foodsCopy =  [...this.state.foods]
    foodsCopy = foodsCopy.filter(food => food.name.toLowerCase().includes(query.toLowerCase()))
    this.setState( {foodsDisplay: foodsCopy})
  }

  toggleAddForm = () => {
    this.setState({ showAddForm: !this.state.showAddForm });
  };

  deleteTodaysFood = id => {
    const todaysFoodsCopy = this.state.todaysFoods.filter(food => food.id !== id);
    let calAmount = this.calcCal(todaysFoodsCopy);

    this.setState( {todaysFoods: todaysFoodsCopy, calAmount})
  }
    
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
            {this.state.todaysFoods.map((oneFood, index) => {
              return <TodayFoodBox key={index} food={oneFood} deleteTodaysFood={this.deleteTodaysFood} />
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
