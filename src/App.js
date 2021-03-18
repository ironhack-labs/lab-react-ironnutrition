import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import foodsJSON from './foods.json'
import FoodBox from './Components/FoodBox'
import AddForm from './Components/AddForm'
import SearchBar from './Components/SearchBar'
import TodayFood from './Components/TodayFood'

import './App.css';


export class App extends Component {

  state = {
    foods: foodsJSON,
    search: "",
    selectItems: []
  }
  
  addFood = (newFood) => {
    this.setState({foods: [newFood, ...this.state.foods]})
  }
  addQuantity = (product, newQuantity) => {
    const updatedArr = [... this.state.foods]
    updatedArr.forEach(food => {
      if (food.name === product) {
        food.quantity = newQuantity;
      }
    })
  }

  stockSearchVal = (searchValue) => {
    this.setState({search: searchValue})
  }
  
  addToList = (item) => {
    this.setState({selectItems: [item, ...this.state.selectItems]})
    
    //console.log(this.state.selectItems)
    
  }

  render() {
    const {foods, search, selectItems} = this.state
    const filteredFood = foods.filter(food => food.name.match(new RegExp ("^" + search, "i")))

    return (
      <div className="App">
        <AddForm addFood={this.addFood} />
        <SearchBar search={search} stockSearchVal={this.stockSearchVal}/>
        <section>
          <div>
            {filteredFood.map(food => <FoodBox addQuantity={this.addQuantity} addToList={this.addToList} foodElement={food} />)}
          </div>
          <TodayFood selectItems={selectItems} />
        </section>
        
      </div>
    )
  }
}

export default App