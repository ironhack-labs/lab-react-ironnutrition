import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddFood'

class App extends Component {
  state = {
    foodList : foods,
    searchPhrase : "",
    dailyFoods : []
  };

  addFoodHandler = (newFood) => {
    const listCopy = [...this.state.foodList];
    listCopy.push(newFood);
    this.setState({
      foodList : listCopy
    })
  };

  handleSearchChange = (e) => {
    this.setState({
      searchPhrase : e.target.value
    })
  }

  updateDailyPlan = (qty, name, cal) => {
     let isInDaily = false;
     const updatedDaily = this.state.dailyFoods.map(
       f => {if(f.name === name) {isInDaily = true;
                                  f.qty = f.qty + qty; 
                                  f.cal = f.cal + qty * cal; 
                                };
               return f});
     if (!isInDaily) updatedDaily.push({name: name, qty: qty, cal: cal * qty});
     this.setState({dailyFoods: updatedDaily});
  }

  render() {
    const filteredList = this.state.foodList.filter(f => 
      f.name.toLowerCase().includes(this.state.searchPhrase.toLowerCase())
    )

    const listToDisplay = filteredList.map(f => 
      <FoodBox key = {f.name} food={f} addToDailyHandler={this.updateDailyPlan} />
    )

    const listOfDailyFoods = this.state.dailyFoods.map(f => 
      <li key = {f.name} > {f.qty} {f.name} = {f.cal} cal</li>
    )

    const totalCalories = this.state.dailyFoods.reduce((acc,f) => {return acc + parseInt(f.cal)}, 0);  
    
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input type="text" className="input search-bar" 
          name="search" placeholder="Search" value= {this.state.searchPhrase} onChange={this.handleSearchChange}/>
        </div>

        <AddFood addFood={this.addFoodHandler} />

        <div className="columns">
          <div className="column">
            {listToDisplay}
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {listOfDailyFoods}
            </ul>
            <strong>Total: {totalCalories} cal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
