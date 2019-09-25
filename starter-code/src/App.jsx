import React, { Component } from 'react'
import foods from './foods.json'
import FoodContainer from './components/FoodContainer'
import AddFoodForm from './components/AddFoodForm'

export default class App extends Component {
  state = {
    foods: foods,
    food: {},
    isOpen: false,
    filteredFoods: []
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
      foods: [...this.state.foods, this.state.food]
    })
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

  render() {
    const { isOpen, foods, filteredFoods } = this.state

    return (
      <div>
        <section className="section">
          <div
            className="Container"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <h1 className="title">Iron Nutrition Food Selector</h1>
          </div>

          <div
            className="Container"
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <button className="button" onClick={this.openModal} style={{ margin: '10px' }}>
              Add Food
            </button>
            <input
              className="input"
              type="search"
              name="search"
              placeholder="Search existing foods"
              onChange={this.search}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="Container">
            <div className="columns">
              <div className="is-three-fifths">
                <div
                  className="Container"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}
                >
                  {filteredFoods.length === 0
                    ? foods.map((food, i) => <FoodContainer key={i} info={food} />)
                    : filteredFoods.map((food, i) => <FoodContainer key={i} info={food} />)}
                </div>
              </div>
              <AddFoodForm
                isOpen={isOpen}
                closeModal={this.closeModal}
                handleSubmit={this.handleSubmit}
                handleInput={this.handleInput}
                style={{ margin: '10px' }}
              />
            </div>
            <div
              className="Container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}
            ></div>
          </div>
        </section>
      </div>
    )
  }
}
