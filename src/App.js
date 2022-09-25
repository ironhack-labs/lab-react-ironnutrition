
import React, { Component } from 'react';
import foods from './foods.json'
import FoodList from './components/FoodList/FoodList'
import FoodForm from './components/FoodForm/FoodForm'  
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {Button} from 'antd'



class App extends Component {

  state = {
    foods: [...foods],
    showForm : true,
  }

  createFood = (food) => {
    const foodToCreate = {
      ...food,
      id: uuidv4() // paquete para generar un id, para que no nos salte el error de las keys de react
    }
    this.setState({ foods: [foodToCreate, ...this.state.foods]})
  }

  handleSearch = (event) => {
    const { value } = event.target
    this.setState({ searchText: value })
  }


  getFoodsToRender = () => {
    const { foods, searchText } = this.state

    if(searchText) { 
      return foods.filter(food=>{
        return food.name.toLowerCase().includes(searchText.toLowerCase())
      })
    }
    return foods
  }

  onDeleteFood = (name) => {
    console.log(name)
    this.setState(prevState => ({
      foods: prevState.foods.filter(food => food.name !== name)
    }))
    console.log(foods)

  }

  toggleShowForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }))
  }

  render() {

    const { searchText, showForm } = this.state
    const foods = this.getFoodsToRender()

    return (
      <div className="App">
        <div>
        <input id="search" name="search" value={searchText} onChange={this.handleSearch} />
            {showForm && (
            <FoodForm createFood={this.createFood} />
            )}
            <Button onClick={this.toggleShowForm}>
                  {showForm ? 'Hide' : 'Show'} form
            </Button>

            <FoodList foods={foods} onDeleteFood={this.onDeleteFood}></FoodList>
        </div>
      </div>
    );
  }
 
}

export default App;
