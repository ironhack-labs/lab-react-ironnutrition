import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import FoodSearch from './components/FoodSearch';


class App extends Component {
  state = {
    food: foods,
    showForm: false,
    searchFood: foods
  }

  filterTheName = (foodName) => {
    const foodsToBeFiltered = [...this.state.food]

    const filteredResults = foodsToBeFiltered.filter((foodEl) => {
      return foodEl.name.toLowerCase().includes(foodName)
    })
    this.setState({searchFood: filteredResults})
  }

  toggleForm = () => {
    this.setState({ showForm : !this.state.showForm})
  }

  addNewFood = (newFoodObj) => {
    const foodCopy = [...this.state.food]
    foodCopy.unshift(newFoodObj);
    this.setState({ food : foodCopy })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleForm}>Want to add food?</button>

        {this.state.showForm
        ? <FoodForm addFood={this.addNewFood} showTheForm={this.toggleForm} />
        : this.state.showForm}

        <FoodSearch filterSearchRes={this.filterTheName}/>

        <ul>
          {this.state.searchFood.map(oneFood => {
            return <FoodBox{...oneFood}/>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
