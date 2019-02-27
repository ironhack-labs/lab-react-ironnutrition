import React, { Component } from 'react'
import './App.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'

class App extends Component {

  state = {
    food:[],
    today:[],
    total:0
  }
  componentDidMount = () => {
    this.setState({food:foods})
  }

  drawFoodBox = (elem, index) => {
    return <FoodBox key={index} image={elem.image} name={elem.name} calories={elem.calories} addToday={this.addToday}/>
  }

  addToday = (image,name,calories,quantity) => {
      if(quantity<=0) return
      let {today} = this.state
      today.push({image,name,calories,quantity})
      this.setState({today})
      let total = 0
      for (let tf in today) {
        total += today[tf].calories
      }
      this.setState({total})
  }

  drawToday = (elem, index) => {
    return <li key={index}>{elem.quantity} {elem.name} = {elem.calories} cal</li>
  }

  render() {
    let {food, today, total} = this.state
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input type="text" className="input search-bar" name="search" placeholder="Search" defaultValue="" />
        </div>
        <div className="columns">
          <div className="column">
            {food.map(this.drawFoodBox)}
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {today.map(this.drawToday)}
            </ul>
            <strong>Total: {total} cal</strong>
          </div>
        </div>
      </div>
    )
  }
}

export default App
