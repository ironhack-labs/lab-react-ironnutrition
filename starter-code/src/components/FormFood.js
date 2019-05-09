import React, { Component } from 'react'

export default class FormFood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: ''
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.addFood(this.state)
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: ''
    })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
         <label> Name</label>
         <input 
          type ="text" 
          name = "name"
          value = {this.state.name}
          onChange = {this.handleChange}
         />
  
         <label>Calories</label>
         <input
          type ="text" 
          name = "calories"
          value = {this.state.calories}
          onChange = {this.handleChange}
         /> 
  
         <label>Image</label>
         <input
          type ="text" 
          name = "image"
          value = {this.state.image}
          onChange = {this.handleChange}
         />
         <label>Quantity</label>
         <input
          type ="text" 
          name = "quantity"
          value = {this.state.quantity}
          onChange = {this.handleChange}
         />

         <input type="submit" value="¡Agregar!"/>
        </form>
      </div>
    )
  }
}
