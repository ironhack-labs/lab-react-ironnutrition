import React, { Component } from 'react'
import foods from './foods.json'
import FoodBox from './components/FoodBox.jsx'
import AddFoodForm from './components/AddFoodForm.jsx'

export default class App extends Component {
  state = {
    foods: foods,
    food: {},
    isOpen: false,
    filteredFoods: [],
    todaysFoods: [],
    totalCalories: 0
  }

  openModal = () => {
    this.setState({
      isOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      foods: [...this.state.foods, this.state.food],
      food: {}
    })
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => (input.value = ''))
    this.closeModal()
  }

  handleInput = e => {
    const { food } = this.state
    const key = e.target.name
    food[key] = e.target.value
    this.setState({ food })
  }

  search = e => {
    const { value } = e.target
    const { foods } = this.state
    const query = value.toLowerCase()
    const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(query))
    this.setState({ filteredFoods })
  }

  addTodaysFood = (name, calories) => {
    this.setState({
      todaysFoods: [
        ...this.state.todaysFoods,
        {
          name,
          calories,
          quantity: this.state.food.quantity
        }
      ],
      totalCalories: this.state.totalCalories + Number(calories)
    })
  }

  render() {
    const { isOpen, foods, filteredFoods, todaysFoods, totalCalories } = this.state

    return (
      <div className='container'>
        <div className='columns' style={{ margin: '5rem 0' }}>
          {/* First Column */}
          <div className='columm'>
            <h1 className='title'>IronNutrition</h1>
            <div className='field'>
              <div className='control'>
                <input className='input' type='search' name='search' placeholder='Search' onChange={this.search} />
              </div>
            </div>
            <button
              className='button is-primary is-large'
              onClick={this.openModal}
              style={{
                position: 'fixed',
                zIndex: '2',
                bottom: '1rem',
                right: '1rem',
                borderRadius: '50%',
                fontSize: '1.5rem'
              }}
            >
              +
            </button>
            {filteredFoods.length === 0
              ? foods.map((food, i) => (
                  <FoodBox key={i} info={food} addTodaysFood={this.addTodaysFood} handleInput={this.handleInput} />
                ))
              : filteredFoods.map((food, i) => (
                  <FoodBox key={i} info={food} addTodaysFood={this.addTodaysFood} handleInput={this.handleInput} />
                ))}
            <AddFoodForm
              isOpen={isOpen}
              closeModal={this.closeModal}
              handleSubmit={this.handleSubmit}
              handleInput={this.handleInput}
            />
          </div>
          {/* Second column */}
          <div className='column'>
            <div className='card' style={{ padding: '1.5rem' }}>
              <h2 className='title'>Today's Foods</h2>
              <ul>
                {todaysFoods.map((food, i) => (
                  <li key={i}>
                    {food.quantity} {food.name} = {food.calories} Cal
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total:</strong> {totalCalories} Cal
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
