import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';
import AddFood from './components/addfood/AddFood';
import Search from './components/search/Search';
export default class App extends Component {

  state = {
    foods: foods.slice(0),
    formVisible: false,
    filteredList: foods.slice(0),
    selectedFood: [],
  }

  getFoods = () =>
    this.state.filteredList.map((food, i) => {
      return (
        <li key={i}>
          <FoodBox food = {food}  />       
        </li>

      )
    })

  addNewFood = newFood => {
    const foodsCopy = [...this.state.filteredList];

    foodsCopy.unshift(newFood);

    this.setState({
      foods: [newFood, ...this.state.foods],
      filteredList: [newFood, ...this.state.filteredList],
    })
  }
  
  handleForm = () => {
    // console.log(this.state.formVisible)
    return (
      <div>
        <AddFood visible={this.state.formVisible} addFood={this.addNewFood}  formVisiblity={() => this.handleFormVisibilty} isFormVisible={this.state.formVisible}/>
      </div>
    )
  }

  handleFormVisibility = (status) => {
    // console.log(status)
    this.setState({
      formVisible: status,
    }, console.log('FormVisibility from state of app', this.state.formVisible))
  }

  foodSearchHandler = (filteredFoodList) => {
    this.setState({
      filteredList: filteredFoodList,
    })
  }

  getSelectedFood = (food) =>{
    this.state.filteredList.filter((food) => food.state.selected === true).map((food, i) => {
      return (
        <li key={i}>
          <FoodBox food = {food}  />       
        </li>

      )
    }
    )
  }

  render() {
    return (
      <div>

        <Search 
        onChangeSearchHandler={this.foodSearchHandler} 
        foodArray={[...this.state.foods]} 
        filteredFood={this.state.filteredList} 
        />

        <button onClick={this.handleFormVisibility}>
          Add Food
        </button>
        <div>
          <AddFood visible={this.state.formVisible} addFood={this.addNewFood}  formVisibility={this.handleFormVisibility} isFormVisible={this.state.formVisible}/>
        </div>

        <div className="columns">
          <ul className="column">
            {this.getFoods()}
          </ul>
          <div className="column">
            <h1><b>Today's foods:</b></h1>
            <h3>Total: 

            </h3>
          </div>
        </div>

        </div>
    )
  }
}

