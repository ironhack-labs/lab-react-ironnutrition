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
      showForm: false, 
      todayFood: [],
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
    let newArray = [];
    if (query.length === 0) {
      newArray = [this.state.allFood]
    } else {
      newArray = [...this.state.allFood].filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase())
      })
    }
    this.setState({
      allFood: newArray
    })
  }

  clickPlus(food){
    console.log(this.state.todayFood);
    
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Add new Food</button>
        {this.state.showForm ? <Form handleFormChange={this.handleFormChange} handleFormSubmit={this.handleFormSubmit} />
          : null}
        <Search searchInputChange={this.searchInputChange} />
        <FoodBox food={this.state.allFood} clickPlus={this.clickPlus}/>
        <TodayFood {...this.state.todayFood} clickPlus={this.clickPlus}/>
      </div>
    )
  }
}

