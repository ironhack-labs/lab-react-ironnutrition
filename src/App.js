import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox.js';
import AddFoodForm from './components/AddFoodForm.js';
import TodaysFoods from './components/TodaysFoods.js'

class App extends React.Component {
  state = {
    food: foods,
    displayedFood: foods,
    todaysFoods: [],
    showForm: false
  }
  showFoodForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }
  addNewFood = (foodObj) => {
    const updatedFoods = [...this.state.food, foodObj];
    this.setState({food: updatedFoods, displayedFood: updatedFoods});
    this.showFoodForm();
  }
  handleSearch = (event) => {
    const value = event.target.value
    const iWrestledABearOnce = this.state.food.filter(foodObj => {
      if (foodObj.name.includes(value)) {
        console.log("HELLO", foodObj.name.includes(value))
        return true
      } else {
        return false
      }
    })
    this.setState({displayedFood: iWrestledABearOnce})
  }

  addFoodToday = (name) => {
    let foundFoodObj;
    this.state.food.map((foodObj) => {
      if (foodObj.name === name) {
        foundFoodObj = foodObj; 
      } 
    })

    let updatedFoodToday = [...this.state.todaysFoods]; 

    if (!updatedFoodToday.includes(foundFoodObj)) {
      foundFoodObj.quantity++;
      updatedFoodToday.push(foundFoodObj)
    } else {
      updatedFoodToday.forEach(foodObj => {
        if (foodObj.name === foundFoodObj.name) {
          foodObj.quantity++;
        }
      });
    }
    this.setState({todaysFoods: updatedFoodToday})
  }

  deleteFoodToday = (name) => {
    const updatedFood = [];
    this.state.todaysFoods.map(foodObj => {
      if (foodObj.name !== name) {
        updatedFood.push(foodObj)
      } else if (foodObj.quantity > 1) {
        foodObj.quantity--;
        updatedFood.push(foodObj);
      }
    })

    this.setState({todaysFoods: updatedFood});
  }


  render () {
    return (
      <div className="App">
      <input type="text" placeholder="Search for food" onChange={ this.handleSearch }></input>
      <div className="main-section">
        <div>
          {this.state.displayedFood.map((foodObj) => {
              return (
                <Foodbox key={foodObj.name} food={foodObj} addFoodToday={this.addFoodToday}/>
              )
            })}
        </div>
        <div>
          <div className="vertical-section">
          <h2>Today's Foods</h2>
            <ul>
              {this.state.todaysFoods.map(foodObj => {
                return <TodaysFoods key={foodObj.name} food={foodObj} deleteFoodToday={this.deleteFoodToday}/>
              })}
            </ul>
            <p>Total:     cal</p>
          </div>
          <div className="vertical-section">
            <button onClick={this.showFoodForm} type="submit">Add New Food</button>
            {this.state.showForm 
            ? <AddFoodForm addNewFood={this.addNewFood}/>
            : null }
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default App;