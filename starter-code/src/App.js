import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import Foods from './foods.json'
import FoodBox from './components/foodBox/foodBox'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-half">
          <FoodBox
            name="pizza"
            calories="420"
            image="https://i.imgur.com/DupGBz5.jpg"
          />
        </div>
      </div>
    )
  }
}

export default App
