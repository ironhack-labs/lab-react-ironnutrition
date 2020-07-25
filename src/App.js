import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox';
import foods from './foods.json';
import Search from './Components/Search';
import Form from './Components/Form';
import TodayFood from './Components/TodayFood';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allFood: [...foods],
      filteredFoods: [...foods],
      showForm: false,
      todayFood: [],
      value: foods.quantity
    }

    this.toggleForm = this.toggleForm.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.searchInputChange = this.searchInputChange.bind(this)
    this.clickPlus = this.clickPlus.bind(this)


  }
  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  handleFormSubmit(event) {
    event.preventDefault()
    this.toggleForm()
    let foodAdded = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    }
    let newFoodArray = [...this.state.allFood]
    newFoodArray.push(foodAdded);
    this.setState({
      allFood: newFoodArray
    })
    // console.log(newFoodArray)
    console.log(this.state)
  }

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  searchInputChange(event) {
    let query = event.target.value;
    const foods = this.state.allFood.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    })
    this.setState({
      ...this.state,
      filteredFoods: foods
    })
  }

  clickPlus(food) {
    console.log(food)
   
    this.setState({
      todayFood: [...this.state.todayFood, food],
    })
  }

  handleValue(event){
    
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Add new Food</button>
        {this.state.showForm ? <Form handleFormChange={this.handleFormChange} handleFormSubmit={this.handleFormSubmit} />
          : null}
        <Search searchInputChange={this.searchInputChange} />
        <FoodBox food={this.state.filteredFoods}  clickPlus={this.clickPlus} value={this.state.value} name="value" />
        <TodayFood todayFood={this.state.todayFood} />
      </div>
    )
  }
}