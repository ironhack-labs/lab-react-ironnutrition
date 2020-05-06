import React, { Component } from 'react'
import foods from '../foods.json'

import 'bulma/css/bulma.css'
import './App.css'

import FoodBox from './ui/foodBox/FoodBox'
import AddFoodForm from './ui/addFoodForm/AddFoodForm.js'

import { NavLink } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'


class App extends Component {

  constructor() {
    super()

     this.foodsCopy = [...foods]
     this.state = { selectionFoods: this.foodsCopy}

  }

  render() {
    return (

      <div>
        <h1>Iron nutrition</h1>
        <Switch>
          <Route path="/form" exact render={() => <AddFoodForm/> } />
        </Switch>
        <button><NavLink to="/form" exact>Add New Food</NavLink></button>
        {this.state.selectionFoods.map((elm, idx) => (
            <FoodBox key={idx} image={elm.image} name={elm.name} calories={elm.calories} />
            ))}
      </div>

    )
  }
}

export default App
