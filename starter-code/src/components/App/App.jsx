import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from '../../utils/foods.json'
import FoodBox from '../FoodBox';
import FoodForm from '../FoodForm';
import SearchBar from '../SearchBar';
import FoodList from '../FoodList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      foodList: foods,
      filteredFood: foods,
      foodChart: [],
      showForm: false
    }
  }

  updateState(state) {
    let foodListCopy = [...this.state.foodList];
    
    let newFood = {
      name: state.name,
      calories: state.calories,
      image: state.image
    };

    foodListCopy.push(newFood);

    this.setState({
      ...this.state,
      foodList: foodListCopy,
      filteredFood: foodListCopy,
      showForm: false
    })
  }

  switchFoodFormVisibility() {
    this.setState({
      ...this.state,
        showForm: !this.state.showForm
    })
  }

  updateSearch(e) {
    console.log(e.target.value)
    let search = e.target.value;

    let filterFood = this.state.foodList.filter(food =>
      food.name.toLowerCase().includes(search.toLowerCase()))
    
    this.setState({
      ...this.state,
      filteredFood: filterFood
    })
  }

  addFoodChart(state) {
    let newFoodChart = [...this.state.foodChart]

    let repeatedFood = newFoodChart.findIndex(el => {
      return el.name === state.name
    })

    if (repeatedFood < 0) {  
      newFoodChart.push({
        numUnits: +state.numUnits,
        name: state.name,
        totalCal: +state.calories * state.numUnits
      })
    } else { 
      newFoodChart[repeatedFood].numUnits = newFoodChart[repeatedFood].numUnits + state.numUnits
      newFoodChart[repeatedFood].totalCal = state.calories * newFoodChart[repeatedFood].numUnits
    }

    console.log(newFoodChart)

    this.setState({
      ...this.state,
      foodChart: newFoodChart
    })
  }

  deleteFood(idx) {
    let removedFoodChart = [...this.state.foodChart]
    removedFoodChart.splice(idx,1)

    console.log(removedFoodChart)

    this.setState({
      ...this.state,
      foodChart: removedFoodChart
    })
  }


  render() {
    return (
      <div>
        <SearchBar updateSearch={e => this.updateSearch(e)}></SearchBar>
        <button onClick={() => this.switchFoodFormVisibility()}>Add Food</button>
        {this.state.showForm && <FoodForm sendStateFromApp={ state => this.updateState(state) }>Add</FoodForm>}
        {this.state.filteredFood.map( (food, i) => {
          return <FoodBox key={i}
          {...food}
          addFoodChart={(state) => this.addFoodChart(state)}
          ></FoodBox>
        })}
        <FoodList
        addFoodChart={(state) => this.addFoodChart(state)}
        totalCal={this.state.foodChart.reduce((a, b) => a + b.totalCal, 0)}
        >
          {this.state.foodChart.map((food, idx) => {
            return <li key={idx}>{food.numUnits} x {food.name} <button onClick={() => this.deleteFood(idx)}>X</button></li>
          })}
        </FoodList>
      </div>
    );
  }
}

export default App;
