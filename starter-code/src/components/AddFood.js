import React, { Component } from 'react'

export default class AddFood extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0
  }
  submit = e => {
    e.preventDefault()
    this.props.addFood(this.state)
    console.log('Aqui va el state:', this.state)
  }
  handleChange = e => {
    const {
      target: { name, value }
    } = e
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        <h1>Add Food</h1>
        <form onSubmit={this.submit}>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Name" value={this.state.name} />
          <input
            onChange={this.handleChange}
            type="number"
            name="calories"
            placeholder="Calories"
            value={this.state.calories}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="image"
            placeholder="Insert a URL"
            value={this.state.image}
          />
          <input type="number" name="quantity" onChange={this.handleChange} value={this.state.quantity} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}
