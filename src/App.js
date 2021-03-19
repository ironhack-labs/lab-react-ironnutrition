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
    selectItems: [],
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
    this.setState({foods: updatedArr})
  }

  stockSearchVal = (searchValue) => {
    this.setState({search: searchValue})
  }
  
  addToList = (item) => {
    const updatedArr = [...this.state.selectItems]
    if (updatedArr.length === 0) {
      
      this.setState({selectItems: [item, ...updatedArr] }, () => console.log(this.state.selectItems))
    } else if (updatedArr.every(food => food.name !== item.name)){
      updatedArr.push(item)
      this.setState({selectItems: updatedArr })
    }
  
  }

  render() {
    const {foods, search, selectItems, totalCalories} = this.state
    const filteredFood = foods.filter(food => food.name.match(new RegExp ("^" + search, "i")))

    return (
      <div className="App">
        <AddForm addFood={this.addFood} />
        <SearchBar search={search} stockSearchVal={this.stockSearchVal} />
        <section>
          <div>
            {filteredFood.map((food) => (
              <FoodBox
                key={food.name}
                addQuantity={this.addQuantity}
                addToList={this.addToList}
                calculateCalories={this.calculateCalories}
                food={food}
              />
            ))}
          </div>
          <TodayFood 
            selectItems={selectItems}
            totalCalories={totalCalories} />
        </section>
      </div>
    );
  }
}

export default App