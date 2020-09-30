import React, {Component} from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';

import FoodBox from './foodBox/FoodBox.js'
import NewFoodForm from './newFoodForm/NewFoodForm.js'
class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: foods,
      showForm: false,
      search: '',
      todayFoods: []
    }
  }

  activateFormView = () => this.setState({ showForm: true })
  
  addToday = newFood => {
    console.log(newFood)
    const todayFoodsCopy = [...this.state.todayFoods]
    todayFoodsCopy.push(newFood)
    this.setState({
      todayFoods: todayFoodsCopy
    })
  }

  addFood = newFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)
    this.setState({
      foods: foodsCopy,
      showForm: false
      
    })
  }
  
  handleInputChange = e => {
        let { name, value} = e.target
        this.setState({ [name]: value })
    }
  render() {
    return (
      <>
        <h1>IronNutrition</h1>
        <button onClick={this.activateFormView} className="button is-link">New Food</button>
        {this.state.showForm && <NewFoodForm addFood={this.addFood}/>}
        
        <div className="control">
          <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleInputChange} placeholder='type here to search'/>
        </div>
        <div class="columns">
            <div class="column">
            {this.state.foods.filter(elm => elm.name.includes(this.state.search)).map((elm, idx) => <FoodBox key={idx} {...elm} addToday={() => this.addToday}/>)}
            </div>
        <div class="column">
            <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
            
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
        </div>
      </div>
      </>
    )
  }
  
}

export default App;
