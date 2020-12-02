import React, { Component } from 'react'

class CreateForm extends Component {
  constructor () {
    super()
    this.state = {
      image: '',
      calories: '',
      name: '',
      quantity: ''
    }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.addFood(this.state)
    this.setState({ 
      image: '',
      calories: '',
      name: '',
      quantity: ''
    })
  }

  handleInputChange = e => {
    const { name } = e.target
    const value = e.target.value
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label><br />
          <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <br /><br />

          <label>Calories:</label><br />
          <input type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
          <br /><br />

          <label>Image:</label><br />
          <input type="text" name="image" checked={this.state.image} onChange={this.handleInputChange} />
          <br /><br />

          <label>Quantity:</label><br />
          <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
          <br /><br />

          <input type="submit" value="Create food" />
      </form>
    )
  }
}

export default CreateForm