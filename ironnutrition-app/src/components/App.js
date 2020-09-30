import React, { Component } from 'react'

import './App.css'

import foods from '../foods.json';

import FoodBox from './Food/FoodBox'
import Form from './Form/Form'
class App extends Component {
  constructor() {
    super()
    this.state = {
      foods,
      showForm: false
    }
  }

  showForm = () => {
    return <Form addForm={this.addForm} />
  }


  addForm = newForm => {

    const foodCopy = [...this.state.foods]
    foodCopy.push(newForm)

    this.setState({ foods: foodCopy })
  }

  render() {

    return (
      <>
        <button onClick={() => this.setState({ showForm: true })} >Mostrar Formulario</button>
        {this.state.showForm ? this.showForm() : null}

        {this.state.foods.map((elm, idx) => <FoodBox key={idx} {...elm} />)}


        {/* <Form /> */}
        {/* <FoodBox /> */}
      </>
    )
  }


}

export default App;
