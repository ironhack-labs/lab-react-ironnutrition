import React, { Component } from 'react'
import foods from './foods.json';
import FoodBox from './components/Foodbox'
import Form from './components/Form'
import List from './components/List'

import 'bulma/css/bulma.css';
import './App.css';

import { Switch, Route, Redirect, Link } from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      foods: foods
    }
  }

  addFood = newFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)

    this.setState({ foods: foodsCopy })
  }

  render() {
    return (
      <>
        {/* <Route path="/" exact render={() => <List />} /> */}

        < Link to="/form" addFood={this.addFood} > Create food</Link >
        <Route path="/form" render={() => <Form addFood={this.addFood} />} />
        {this.state.foods.map(elm => <FoodBox key={elm.id} {...elm} />)}
      </>
    )
  }
}


export default App;
