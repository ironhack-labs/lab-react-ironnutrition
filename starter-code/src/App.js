import React, { Component } from 'react'
import './App.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddNewForm from './components/AddNewForm';

class App extends Component {

  state = {
    foods:[],
    food:[],
    today:[],
    total:0,
    form: false
  }
  componentDidMount = () => {
    this.setState({foods})
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

  changeSearch = e => {
    let {foods} = this.state
    let searchterm = e.target.value.toLowerCase()
    let food = foods.filter((elem, index)=> elem.name.toLowerCase().includes(searchterm) )
    this.setState({food})
  }

  addFood = (image,name,calories,) => {
    let {foods} = this.state
    foods.push({image,name,calories,quantity:0})
    let food = [...foods]
    this.setState({food,foods})
    this.hideForm()
  }
  showForm = () => {
    let form = true
    this.setState({form})
  }

  hideForm = () => {
    let form = false
    this.setState({form})
  }

  drawForm = () => {
    let {form} = this.state
    if (form === true) {
      return (<AddNewForm addFood={this.addFood} hideForm={this.hideForm}/>)
    } else {
      return <button onClick={this.showForm} className="button is-info">Add New</button>
    }
  }

  render() {
    let {food, today, total} = this.state
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input onChange={this.changeSearch} type="text" className="input search-bar" name="search" placeholder="Search" defaultValue="" />
        </div>
        <div className="columns">
          <div className="column">
            {food.map(this.drawFoodBox)}
            {this.drawForm()}            
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
