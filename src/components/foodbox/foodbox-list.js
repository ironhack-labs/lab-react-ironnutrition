import React, { Component } from 'react'

import 'bulma/css/bulma.css'

import foodsFromDB from '../../foods.json'

import FoodCard from '../foodCard/foodCard'

class Foodlist extends Component {
  constructor() {
    super()
    this.state = {
      foods: foodsFromDB,
      name: '',
      calories: '',
      image: '',
      quantity: 0,
      inputSearch: ''
    }
  }

  //Metodos 
  handleInputChange = e => {
    console.log ('yayayyayayayayyayayya')
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { name, calories, image, quantity } = this.state
      
    this.insertFood({name, calories, image, quantity})

    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    })
  }
  
  insertFood = (newFood) => {
    const foodCopy = [...this.state.foods]
    foodCopy.push(newFood)
    this.setState({ foods: foodCopy })
  }
    
  render() {
    return (
      <div className='box'>
        <div className='media'>
          <div className='media-left'>
              <label>
              Buscar:
                <input name="inputSearch" type="text" value={this.state.inputSearch} onChange={this.handleInputChange} />
            </label> <br></br>
            <ul>
              {this.state.foods.filter((elm) => elm.name.toLowerCase().includes(this.state.inputSearch)).map((elm, idx) => <FoodCard {...elm} key={idx} quantity = {this.state.quantity} handleChange={() => this.handleInputChange(idx)}/>)}
            </ul>
          </div>
        </div>
        <div className='media'>
        <div className='media-right'>
          
        </div>
          <form onSubmit={this.handleFormSubmit}>
            <label>
                Name:
                <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
            </label> <br></br>

            <label>
                Calories:
                <input name="calories" type="number" value={this.state.calories} onChange={this.handleInputChange} />
            </label><br></br>

            <label>
                Image:
                <input name="image" type="text" value={this.state.image} onChange={this.handleInputChange} />
            </label><br></br><br></br>

            <button>¡Enviar!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Foodlist