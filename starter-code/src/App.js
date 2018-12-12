import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from "./foods.json"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

class App extends Component {
  state = {
    foods: [],
    newFood: {},
    todaysFood: [],
  }

  componentDidMount = () => {
    this.setState({foods})
  }

  drawFoodBox = () => {
    const { foods } = this.state
    return foods.map((box, index) => <FoodBox onChangeQty={this.onChangeQty} onAdd={this.onAdd} arrayPos={index} key={index} {...box}/>)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { foods, newFood } = this.state
    newFood.quantity = 0
    foods.push(newFood)

    this.setState({foods})
  }

  onChange = (e) => {
    const {newFood} = this.state

    newFood[e.target.name] =e.target.value
    this.setState({newFood})
  }


  onSearch = (e) => {
    let {foods} = this.state
    const searchQuery = e.target.value.toUpperCase()

    foods = foods.filter((food) => {
      return food.name.toUpperCase().includes(searchQuery)
    })
    this.setState({foods})

  }

  onChangeQty = (e) => {
    const {foods} = this.state
    foods[e.target.name].quantity = e.target.value
    this.setState({foods})
  }

  onAdd = (e) => {
    const {foods, todaysFood} = this.state
    todaysFood.push(foods[e.target.name])
  }

  render() {
    const {drawFoodBox, onSubmit, onChange, onSearch} = this
    const {newFood} = this.state
    return (
      <div className="App">
        <Fragment>
          <h1>Iron Nutrition</h1>
          <input type="text" name="searchBar" onChange={onSearch} />
          <AddFoodForm onSubmit={onSubmit} onChange={onChange} {...newFood}/>
          <div className="columns">
            <div className="column">
              {drawFoodBox()}
            </div>
            <div className="column">
              <h1>Today's Food</h1>
            </div>
          </div>
          
        </Fragment>
      </div>
    );
  }
}

export default App;
