
import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/foodbox/FoodBox';
import NewFood from './component/newfood/NewFood';
import Search from './component/search/Search';


export default class App extends Component {

  state = {
    foods: foods,
    formNewFood: false,
    filterdFoods: ''
  }

  showFormAddFood = () => {
      this.setState({
        formNewFood: true
      })
  }

  addFoodHandler = (newFood) => {
    const foodArrCopy = [...this.state.foods]
    foodArrCopy.push(newFood)

    this.setState({
      foods: foodArrCopy
    })
  }

  filterFoods = (searchInput) => {
    let searchTerm = searchInput.search
    const foodArrCopy = this.state.foods

    let filteredArr = foodArrCopy.filter(food => food.name.toLowerCase().startsWith(searchTerm))

    this.setState({
      filterdFoods: filteredArr
    })
  }

  render() {
   
    return (
      <div>
        <h1 className="title">IronNutrition</h1>
        <button className="button is-primary" onClick={(e) => this.showFormAddFood(e)}>Add new food</button>
        {this.state.formNewFood &&  
        <NewFood addNewFood={this.addFoodHandler} />}
        <Search searchTerm={this.filterFoods}/>
        {this.state.filterdFoods !== '' ? 
          this.state.filterdFoods.map((food, index) => 
            <FoodBox key={index} foodType={food}/>) 
            :
          this.state.foods.map((food, index) => 
          <FoodBox key={index} foodType={food}/>)
        }
      </div>
    )
  }
}

