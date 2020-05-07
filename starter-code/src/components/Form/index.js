import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    name: '',
    calories: '',
    quantity: '',
    image: '',
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.addFood(this.state)
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
            onChange={this.handleInputChange}
          />

          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInputChange}
          />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleInputChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
