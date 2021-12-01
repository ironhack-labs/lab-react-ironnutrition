import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import Form from './components/Form'
import { Switch, Route, Redirect} from 'react-router-dom'
import React, { Component } from "react";
import SearchBar from './components/SearchBar'

class App extends Component {

  
  constructor(){
    super()

      this.state = {
        foods: foods,
        showForm: false,
       
    }
  }

  showForm = () =>{
    this.setState({
      showForm: !this.state.showForm,
    })
  }

  addFood = (newFood) => {
    //const foodsCopy = [...this.state.foods, newFood]
    //foodsCopy.push(newFood)
    console.log('las nuevas foods son', this.state.foods)
    this.setState({
        foods: [...this.state.foods, newFood]
    })
    console.log('las foods del estado son', [...this.state.foods, newFood])
    
  }

  prueba = () => {
    this.setState({
      foods: [...this.state.foods, 1]
    })
  }
  getSearch = (newSearch) => {
    const searchCopy = [...this.state.foods]
    let newArr = searchCopy.filter(food => food.name.toLowerCase().includes(newSearch.name.toLowerCase()))

    this.setState({
        foods: newArr
    })
  }

  render(){

  return (
    <div >
        <button onClick= {() => {this.prueba()}}>PRUEBA</button>
        <button onClick= {() => {this.showForm()}}>Add new food</button>
        {this.state.showForm && <Form  addFood={this.addFood}/>}

        <SearchBar getSearch={this.getSearch}/>
        {this.state.foods.map((elm) => {
          return <FoodBox food={elm}/>
        })}
       
      
    </div>
  )}

}

export default App;
