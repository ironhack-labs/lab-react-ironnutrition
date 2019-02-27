import React, { Component, Fragment } from 'react'
import './App.css'
import foods from './foods.json'
import FoodBox from './components/box'
import AddFoodForm from './components/foodforms';

class App extends Component {
  state = {
    foods: [],
    newFood: {},
    todaysFood: []
  }

  componentDidMount = () => {
    this.setState({ foods })
  }

  onAdd = (e) => {
    let { foods, todaysFood } = this.state
    let toList = {
      name: foods[e.target.name].name,
      quaty: foods[e.target.name].quantity,
      calories: foods[e.target.name].quantity * foods[e.target.name].calories
    }

    todaysFood.push(toList)
    this.setState({ todaysFood })
  }
  onChangeQuantity = (e) => {
    let { foods } = this.state
    foods[e.target.name].quantity = e.target.value
    this.setState({ foods })
  }

  onChange = (e) => {
    let { newFood } = this.state
    newFood[e.target.name] = e.target.value
    this.setState({ newFood })
  }
  onSearch = (e) => {
    let { foods } = this.state
    let searchQuery = e.target.value.toUpperCase()
    foods = foods.filter((food) => {
      return food.name.toUpperCase().includes(searchQuery);
    })
    this.setState({ foods })
  }

  drawFoodBox = () => {
    let { foods } = this.state
    return foods.map((box, index) => <FoodBox key={index} arrayPos={index} {...box} onChangeQuantity={this.onChangeQuantity} onAdd={this.onAdd} />)
  }

  render() {
    let { drawFoodBox, onSubmit, onChange, onSearch } = this
    let { newFood, todaysFood } = this.state

    return (
      <Fragment>
        <h1>Iron nutrition</h1>
        <input type="text" onChange={onSearch} name="searchBar" />
        <AddFoodForm onSubmit={onSubmit} onChange={onChange}  {...newFood} />
        <div className="columns">
          <div className="column">
            {drawFoodBox()}
          </div>
          <div className="column">
            <h3>Today's food</h3>
            <ul>
              {todaysFood.map((item, aux) => <li key={aux}> {item.quaty} - {item.name} Calories: {item.calories}</li>)}
              {
                '0' || todaysFood.reduce((a, b) => ({ calories: a.calories + b.calories }))
              }
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default App;