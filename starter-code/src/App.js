
import React, { Component, Fragment } from 'react'
import './App.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm';
import 'bulma/css/bulma.css';

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
    const { foods, todaysFood } = this.state
    const toList = {
      name: foods[e.target.name].name,
      qty: foods[e.target.name].quantity,
      calories: foods[e.target.name].quantity * foods[e.target.name].calories
    }

    todaysFood.push(toList)
    this.setState({ todaysFood })
  }

  onChangeQuantity = (e) => {
    const { foods } = this.state
    foods[e.target.name].quantity = e.target.value
    this.setState({ foods })
  }

  drawFoodBox = () => {
    const { foods } = this.state
    return foods.map((box, index) => <FoodBox key={index} arrayProducts={index} {...box} onChangeQuantity={this.onChangeQuantity} onAdd={this.onAdd} />)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { foods, newFood } = this.state
    newFood.quantity = 0
    foods.push(newFood)

    this.setState({ foods })
  }

  onChange = (e) => {
    const { newFood } = this.state
    newFood[e.target.name] = e.target.value
    this.setState({ newFood })
  }
  onSearch = (e) => {
    let { foods } = this.state
    const searchQuery = e.target.value.toUpperCase()
    foods = foods.filter((food) => {
      return food.name.toUpperCase().includes(searchQuery);
    })
    this.setState({ foods })
  }

  render() {
    const { drawFoodBox, onSubmit, onChange, onSearch } = this
    const { newFood, todaysFood } = this.state

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
              {todaysFood.map((item, aux) => <li key={aux}> {item.qty} - {item.name} Calories: {item.calories}</li>)}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

