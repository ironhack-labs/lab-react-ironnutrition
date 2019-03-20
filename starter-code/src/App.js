import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import Search from './components/Search'
import Item from './components/Item'

class App extends Component {
  constructor(props) {

    super(props)

    this.state = {
        foods: foods,
        searchString: '',
        todayFood: []
    }
  }

  addTodayFood = food =>{
    console.log(food)
    let todayFoodCopy = [...this.state.todayFood]
    let exists = false
    
    todayFoodCopy.forEach(element => {
      if( element.name === food.name) {
        element.quantity += food.quantity
        exists = true
      }

    })

    if(!exists){
      todayFoodCopy.push(food)
    }

    this.setState({
      todayFood: todayFoodCopy
  })

  }

  addFood = theFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(theFood)
    console.log(foodsCopy)
    this.setState({
        foods: foodsCopy
    })
  }

  searchFood = theSearch => {
    this.setState({
      searchString: theSearch
    })
  }

  deleteFood = foodIndex => {
    const todayFoodCopy = [...this.state.todayFood]

    todayFoodCopy.splice(foodIndex, 1)
    this.setState({
        todayFood: todayFoodCopy
    })
  }

  render() {
    let foodList = [...this.state.foods]

    if(this.state.searchString){
      foodList = foodList.filter(element => element.name.toUpperCase().includes(this.state.searchString.toUpperCase()))
    }

    const calories = this.state.todayFood.reduce((acc,current) => {
      return acc + (current.calories * current.quantity)
    }, 0)

    return (
      <div className="App">
      {<section id="forms">
          <Search searchFood={this.searchFood}/>
          <AddFood addFood={this.addFood} />
        </section>
      }
        <section id="food-list">
          {
            foodList.map((food,id) => {
              return <FoodBox key ={id} {...food} addTodayFood={this.addTodayFood}/>
            }
            )
          }
        </section>
        <section id="food-adder">
          <div>
              <h2>Today's foods</h2>
              <ul>
               
              {
              this.state.todayFood.map((food, index) => <Item key= {index} {...food} deleteFood={this.deleteFood}/>)
              }
              </ul>
              <p>Total calories: {calories}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;