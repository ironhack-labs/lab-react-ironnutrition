import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddItem from './components/AddItem'
import {Button} from 'react-bootstrap'

class App extends Component {

  state = {
    foodsList: foods,
    showForm: false,
    filteredList: foods,
  }

  handleAdd = (event) =>{
    event.preventDefault()
    console.log(event.target)
    let newFood = {
      id: this.state.foodsList.length +1,
      name: event.target.itemName.value,
      imageUrl: event.target.itemImage.value,
      calories: event.target.itemCalories.value,
      quantity: 0
    }

    this.setState({
      foodsList: [...this.state.foodsList, newFood],
      showForm: false,
      filteredList: [...this.state.filteredList, newFood]
    })
  }

  handleShowForm = () =>{
    this.setState({
      showForm:true
    })
  }

  handleSearch = (event) => {
    let searchText = event.target.value

    const {foodsList} = this.state

    let filteredList = foodsList.filter((item)=>{
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    this.setState({
      filteredList: filteredList,
    })
  }


  render() {

    const {filteredList, showForm} = this.state
    return (
      <div className="div1">
      <h1>IronNutrition</h1>
      <input onChange={this.handleSearch} type='text' placeholder ="Search for food"></input>
      {
        showForm ? (<AddItem onAdd = {this.handleAdd}/>) : (<Button className="show-btn" variant="outline-dark" onClick ={this.handleShowForm}>Add New Food</Button>)
      }
        
        <FoodBox items={filteredList}/>
      </div>
    )
  }
}

export default App