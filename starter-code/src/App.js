import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import foods from './foods.json'

import FoodBox from './component/FoodBox'
import AddForm from './component/AddForm'
import Search from './component/Search'
import Group from './component/Group'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: foods,
      searched: '',
      toggle: false,
      today: [],
    }
  }

  toggleHandler = () => this.setState({ toggle: !this.state.toggle })

  createHandler = food => {
    // food.quantity = 0

    const { foods } = this.state

    const foodsCopy = [...foods]
    foodsCopy.unshift(food)

    this.setState({ foods: foodsCopy })
  }

  filterHandler = search => {
    this.setState({
      searched: this.state.foods.filter(food =>
        food.name.toLowerCase().includes(search.toLowerCase())
      ),
    })
  }

  addToday = food => {
    const todayCopy = [...this.state.today]
    food.calories = food.calories * food.quantity

    const index = todayCopy.findIndex(obj => obj.name === food.name)
    if (index === -1) {
      this.setState({ today: [...this.state.today, food] })
      return
    }

    todayCopy[index].quantity += food.quantity
    todayCopy[index].calories += food.calories

    this.setState({ today: todayCopy })
  }

  deleteToday = idx => {
    const todayCopy = [...this.state.today]
    todayCopy.splice(idx, 1)

    this.setState({
      today: todayCopy,
    })
  }

  render() {
    const { foods, toggle, searched, today } = this.state

    const foodsArr = !searched ? foods : searched

    return (
      <div>
        <Search foods={foods} filterHandler={this.filterHandler} />
        <button className="button is-large" onClick={this.toggleHandler}>
          {toggle ? 'Close' : 'Add Food'}
        </button>
        {toggle && <AddForm createHandler={this.createHandler} />}
        <section className="columns">
          <article className="column">
            {foodsArr.map((food, index) => (
              <FoodBox {...food} key={index} addToday={this.addToday} />
            ))}
          </article>
          <Group today={today} deleteToday={this.deleteToday} />
        </section>
      </div>
    )
  }
}

export default App
