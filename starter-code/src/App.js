import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import Form from './components/Form'
import SearchBar from './components/SearchBar';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foods: foods,
      showForm: true,
      search: '',
      today: []
    }
    this.addHandler = this.addHandler.bind(this)
    this.showForm = this.showForm.bind(this)
    this.filterHandler = this.filterHandler.bind(this)
    this.todayFood = this.todayFood.bind(this)

  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  addHandler(newFood) {
    let myNewFood = [...this.state.foods]
    console.log(newFood)
    myNewFood.unshift(newFood)
    this.setState({
      foods: myNewFood
    })
  }

  filterHandler(word) {
    this.setState({
      search: word
    })
  }

  todayFood(elem) {
    let copyToday = [...this.state.today]
    let item = {
      name: elem.name,
      calories: elem.calories,
      image: elem.image,
      quantity: elem.quantity + 1
    }
    let keys = copyToday.map(food => food.name)

    if (keys.includes(item.name)) {
      let key = keys.indexOf(item.name)
      copyToday[key].calories += item.calories
      copyToday[key].quantity += item.quantity
    } else {
      copyToday.unshift(item)
    }
    this.setState({
      today: copyToday
    })
  }

  render() {
    return (
      <div className='App'>
        <button onClick={() => { this.showForm() }}>ADD</button>
        <SearchBar word={this.state.search} filterHandler={this.filterHandler}></SearchBar>
        <div className={this.state.showForm ? 'hidden' : ''}>
          <Form AddHandler={this.addHandler} ShowForm={this.showForm}></Form>
        </div>
        <div className='foods-box'>
          <div>
            {this.state.foods.filter(food => food.name.toUpperCase().includes(this.state.search.toUpperCase())).map((food, index) => {
              return <FoodBox key={index} todayFood={this.todayFood} {...food}></FoodBox>
            })}
          </div>
          <div>
            <h2>Today's Foods</h2>
            <ul>
              {this.state.today.map(food => {
                return <li key={food.name}>{food.quantity} {food.name} {food.calories}</li>
              })
              }
              <li>Total:  {this.state.today.map(food => food.calories).reduce((acc, cur) => {
                return acc + cur
              }, 0)}
              </li>

            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
