import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class FoodForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.addFood(this.state)
    this.setState({
      name: '',
      calories: '',
      image: '',
      quantity: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Calories:
          <input
            name="calories"
            value={this.state.calories}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Image:
          <input
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />
        <input type="submit" value="Create food" className="button" />
      </form>
    )
  }
}

export default FoodForm