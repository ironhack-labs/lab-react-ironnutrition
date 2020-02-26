import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox'
import FormModal from './components/FormModal/FormModal'
import FoodLi from './components/FoodLi/FoodLi'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: foods,
      foodsOriginal: foods,
      showModal: false,
      search: '',
      todayFoods: [],
      totalCalories: 0
    }
  }

  openModal = () => {
    this.state.showModal = !this.state.showModal
    this.setState({ showModal: this.state.showModal })
  }

  addFood = (theFood) => {
    let foodsCopy = [...this.state.foods]
    let foodsOriginalCopy = [...this.state.foodsOriginal]

    foodsCopy.push(theFood)
    foodsOriginalCopy.push(theFood)
    this.setState({
      foods: foodsCopy,
      foodsOriginal: foodsOriginalCopy
    })
  }

  handleChange = e => {
    let { value } = e.target

    let filteredFoods = this.state.foodsOriginal.filter(elm => elm.name.toLowerCase().includes(value))

    this.setState({
      foods: filteredFoods,
      search: value,

    })
  }

  addList = (qty, key) => {
    let foodsCopy = [...this.state.foods]
    foodsCopy[key].quantity = parseInt(foodsCopy[key].quantity) + parseInt(qty)

    foodsCopy[key].calories = foodsCopy[key].calories * qty

    let todayFoodsCopy = [...this.state.todayFoods]
    let equal
    let totCal = 0
    todayFoodsCopy.forEach((elem, idx) => {

      if (elem.name === foodsCopy[key].name) {
        foodsCopy[key].calories += elem.calories
        equal = idx
      }
    })
    equal != undefined ? todayFoodsCopy.splice(equal, 1) : null

    todayFoodsCopy.push(foodsCopy[key])
    todayFoodsCopy.forEach(elem => totCal += parseInt(elem.calories))
    equal = undefined
    console.log(totCal)

    this.setState({
      todayFoods: todayFoodsCopy,
      totalCalories: totCal
    })
  }

  deleteOne = idx => {

    let todayFoodsCopy = [...this.state.todayFoods]
    todayFoodsCopy.splice(idx, 1)

    let totCal = 0
    todayFoodsCopy.forEach(elem => totCal += parseInt(elem.calories))

    this.setState({
      todayFoods: todayFoodsCopy,
      totalCalories: totCal
    })
  }


  render() {
    return (
      <div className="container">
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Search" name='search' value={this.state.search} onChange={this.handleChange} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <FormModal className={this.state.showModal && "is-active"} openModal={this.openModal} addFood={this.addFood} />
            <button onClick={this.openModal}>Add new Food</button>
            {this.state.foods.map((elem, idx) => {
              return <FoodBox key={idx} {...elem} idx={idx} addList={this.addList} />
            })}
          </div>
          <div className="column">
            <h2>Todays foods</h2>
            <ul>
              {this.state.todayFoods.map((elem, idx) => <FoodLi key={idx} {...elem} deleteOne={this.deleteOne} />)}
            </ul>
            <div> Total: {this.state.totalCalories} cal</div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
