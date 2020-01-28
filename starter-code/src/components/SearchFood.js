import React, { Component } from 'react'
import foods from '../foods.json'

export default class SearchFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange(event) {
    this.setState({
      searchString: event.currentTarget.value
    })
    this.props.sendStateToParent(event.currentTarget.value)
  }


  render () {
    return (
      <div>
        <input
          type='text'
          name='searchData'
          onChange={this.handleSearchChange}
          placeholder='Search for food'
          value={this.state.searchString}
        />
      </div>
    )
  }
}
