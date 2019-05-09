import React, { Component } from 'react'

export default class AddFood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    quantity: 0,
    isActive: false
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(this.state.allFoods)
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.props.addFood(this.state)
    this.setState({ name: '', calories: '', image: '', quantity: 0 })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleChange}
          />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />

          {/* <label>Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          /> */}

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
