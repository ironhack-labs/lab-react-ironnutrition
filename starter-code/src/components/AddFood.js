import React, { Component } from 'react'

export default class AddFood extends Component {

  state = {
    name: '',
    calories: 0,
    image: ''
  }

  submit = e => {
    e.preventDefault()
    this.props.addFood(this.state)
    this.setState({
      name: '',
      image: '',
      calories: 0 
    })
  }

  handleChange = e => {
    const {target:{name, value}} = e
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Name:</label>
          <input onChange={this.handleChange} value={this.state.name} type="text" name="name"/>
          <label>Calories:</label>
          <input onChange={this.handleChange} value={this.state.calories} type="number" name="calories"/>
          <label>Image:</label>
          <input onChange={this.handleChange} value={this.state.image} type="text" name="image"/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }
}

