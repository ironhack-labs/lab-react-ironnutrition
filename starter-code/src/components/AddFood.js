import React, { Component } from 'react'

export default class AddFood extends Component {

  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0
  }

  submit = (e) => {
    e.preventDefault()
    this.props.addFood(this.state)
    this.setState({
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label htmlFor='name'>Name</label>
          <input onChange={this.handleChange} type='text' name='name' value={this.state.name} />
          <label htmlFor='calories'>Calories</label>
          <input onChange={this.handleChange} type='number' name='calories' value={this.state.calories} />
          <label htmlFor='image'>Image</label>
          <input onChange={this.handleChange} type='text' name='image' value={this.state.image} />
          <label htmlFor='quantity'>Quantity</label>
          <input onChange={this.handleChange} type='number' name='quantity' value={this.state.quantity} />
          <input type="submit" value="add" />
        </form>
      </div>
    )
  }
}


