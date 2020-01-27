import React, { Component } from 'react'
import foods from '../foods.json'

export default class SearchFood extends Component {
  constructor (props) {
    super(props)
    this.state = {foods}
  }

  handleChange = event => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  searchFoodHandler = (data) => {
    data.preventDefault()
    this.setState({
      foods: foods.filter(foods =>
        foods.name.toLowerCase().includes(data))
    })
  }

  render () {
    return (
      <div>
        search:
        <input
          type='text'
          name='name'
          value={this.state.data}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
