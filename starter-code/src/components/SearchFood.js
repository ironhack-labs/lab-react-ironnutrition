import React, { Component } from 'react'
import foods from '../foods.json'

export default class SearchFood extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      calories: '',
      image: '',
      find: '',
    }
  }

  handleChange = event => {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  searchFood = data => {
    const find = data;
    data.preventDefault()
    this.setState({
      foods: foods.filter(foods =>
        foods.name.toLowerCase().includes(find)
      )
    })
  }

  render () {
      {this.state.data}
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
