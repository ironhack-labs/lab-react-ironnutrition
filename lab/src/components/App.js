import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox'
import foods from './foods.json'
import FoodForm from './FoodForm'
import Search from './Search'

class App extends Component {
  constructor() {
    super()
    this.filtered= []
    this.state = {
      foods: foods,
      showForm: false,
      isFilter: false,
    }
  }
  insertFood = newFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)
    this.setState({foods: foodsCopy})
  }
  handleFoodForm = () => {
    this.setState({
      showForm:true
    })
  }
  filterFood = (search) => {
    this.filtered = this.state.foods.filter(elm => elm.name.includes(search))
  }
 

  render() {
    return (
      <main>
        <Search/>
        <button onClick={this.handleFoodForm}>Add Food</button> 
        {this.state.showForm ? <FoodForm addFood={this.insertFood}/>:null}
        {this.state.foods.map(elm => <FoodBox {...elm} />)}
    
        </main>
    )
  }
}



export default App;
