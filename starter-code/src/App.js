import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import FoodBox from './Components/FoodBox';
import AddFood from './Components/ButtonAdd'
import {Switch, Route} from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <div>
        <FoodBox/>


      </div>
    )
  }
}

export default App
