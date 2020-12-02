import React, { Component } from 'react'

class SearchInput extends Component {
  constructor () {
    super()
    this.state = {
      search: ''
    }
  }

  handleInputChange = e => {
    const { name } = e.target
    const value = e.target.value
    this.props.searchFood(this.state)
    this.setState({ [ name ]: value })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
          <input type="text" className="input search-bar" name="search" placeholder="Search" value={ this.state.search } onChange={ this.handleInputChange } /> 
      </form>
    )
  }
}

export default SearchInput