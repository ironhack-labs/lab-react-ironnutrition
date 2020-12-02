import './App.css';
import React, { Component } from 'react'

import foods from './foods.json'
import FoodBox from './foodbox/FoodBox';
import Form from './form/Form'
import Search from './search/Search';


class App extends Component {
  constructor() {
    super()
    this.state = {
      foodList: foods,
      displayForm: false
    }

  }

  toggleShowForm = () => this.setState({ displayForm: !this.state.displayForm })
  
  addNewFood = food => {
    const newFoodList = [...this.state.foodList]
    newFoodList.push(food)
    this.setState({ foodList: newFoodList })
  }

  searchFood = food => {
    const newFoodList = [...this.state.foodList]
    newFoodList.filter(elm => elm.name.toLowerCase().includes(food.toLowerCase()))
    // console.log(food, newFoodList)
  }
  
  render() {
    return (
      <main>
        <h1 className="title">IronNutrition</h1>
        <button onClick={this.toggleShowForm} className="button is-primary">Add new food</button>
        {this.state.displayForm === true ? <Form addFood={this.addNewFood} hideForm={this.toggleShowForm} /> : null}
        <Search searchFor={this.searchFood} />
        <section>
          { this.state.foodList.map((elm, idx) => <FoodBox key={idx} {...elm}/>)}
        </section>
      </main>
    )
  }
}

export default App;
