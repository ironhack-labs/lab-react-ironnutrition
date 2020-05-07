import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox.js'
import Search from './components/Search'
import CaloriesCounter from './components/CaloriesCounter'

class App extends Component {
  state = {
    foods,
    allfoods: foods,
    todayFood: [],
    total: 0,
  }
  searchFood = (e) => {
    //const foundFood = [... this.state.foods]
    if (e.target.value) {
      const filteredFoods = [...this.state.allfoods].filter((food) =>
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      this.setState({ foods: filteredFoods })
    } else {
      this.setState({ foods: this.state.allfoods })
    }
  }

  handleInputChange = ({ target: { name, value } }) => {
    const calories = name.split(' ')[name.split(' ').length - 1]
    const food = name.replace(calories, '')
    let foodInInput = { food, calories, value }

    let foodIdx = 'empty'
    this.state.todayFood.forEach((e, i) => (foodIdx = e.food === food ? i : 'empty'))
    console.log(foodIdx)

    if (foodIdx === 'empty') {
      this.setState({ todayFood: [...this.state.todayFood, foodInInput] })
    } else {
      const allFoods = this.state.todayFood
      allFoods[foodIdx] = foodInInput
      this.setState({ todayFood: allFoods })
    }
    if (value === '0') {
      console.log('si')
      const allFoods = this.state.todayFood
      allFoods.splice(foodIdx, 1)
      this.setState({ todayFood: allFoods })
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const total = this.state.todayFood.reduce(
      (acc, cur) => acc + Number(cur.value) * Number(cur.calories),
      0
    )
    this.setState({ total })
  }
  render() {
    return (
      <div className="App">
        <Search fcn={this.searchFood} />
        <main>
          <div>
            {this.state.foods.map((food, idx) => (
              <FoodBox
                className="FoodBox"
                food={food}
                key={idx}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            ))}
          </div>
          <div>
            <h1>Today's Foods </h1>
            <ul>
              {this.state.todayFood.map((elem, idx) => (
                <CaloriesCounter
                  key={idx}
                  value={elem.value}
                  food={elem.food}
                  calories={elem.calories * elem.value}
                />
              ))}
              <p>Total: {this.state.total}</p>
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

export default App
