import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import dataFood from './foods.json'
import FoodBox from "./components/FoodBox"
import AddFood from "./components/AddFood"
import Search from "./components/Search"
import Today from "./components/Today"



class App extends Component {

  constructor () {
    super()

    this.state = { 
      foods: dataFood, 
      filtered: dataFood, 
      todayFoods: [],
      total: 0
    }

  }

  addFood = food => {
    const foodsCopy = [...this.state.filtered]
    foodsCopy.push(food)
    this.setState({
        filtered: foodsCopy,
    })
  }

  searchFood = query => {
    let queryUpper = query.slice(0,1).toUpperCase() + query.slice(1,query.length)
    let foodsCopy = [...this.state.foods]
    foodsCopy = dataFood.filter (elm => {
      return elm.name.includes(query) || elm.name.includes(queryUpper)
    })
    this.setState({
      filtered: foodsCopy
    })
  }

  updateToday = (food,quantity,calories) => {

    if (!quantity) quantity = 1

    const todayFoodsCopy = [...this.state.todayFoods]

    if(todayFoodsCopy.some(elm => elm.food === food)){
      todayFoodsCopy.forEach(elm => {
        if (elm.food === food) {
          elm.quantity = parseInt(elm.quantity,10) + parseInt(quantity,10)
          elm.calories = elm.quantity * calories
        }
      })
    } else {
      todayFoodsCopy.push({food,quantity,calories: calories * quantity})
    }

    this.getTotal(todayFoodsCopy)
    this.setState({
      todayFoods: todayFoodsCopy,
    })
  }

  getTotal = (arr) => {
    let sum = 0
    if (arr.length > 0){
      for (let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i].calories,10)
      }
    } 
    this.setState({
      total: sum,
    })
  }

  deleteFood = (food) => {

    let todayFoodsCopy = [...this.state.todayFoods]

    todayFoodsCopy = todayFoodsCopy.filter(elm => elm.food !== food)

    this.getTotal(todayFoodsCopy)
    this.setState({
      todayFoods: todayFoodsCopy,
    }) 
  }

  render() {
    return (
      <main className="toFlex">
        <section className="searchAndAdd">
          <Search searchFood={this.searchFood} />
          {
            this.state.filtered.map((food,idx) => {
              return <FoodBox key={idx} {...food} updateToday={this.updateToday} />
            })
          }
          <AddFood addFood={this.addFood} />
        </section>
        <section className="today">
            <h2>Today's foods</h2>
            <ul>      
              {
                this.state.todayFoods.map((todayFood,idx) => {
                  return <Today key={idx} {...todayFood} deleteFood={this.deleteFood}/>
                })
              }
            </ul>
            <p>  
              Total: <span>{this.state.total}</span> calorías
            </p>
        </section>
      </main>
    )
  }
}

export default App
