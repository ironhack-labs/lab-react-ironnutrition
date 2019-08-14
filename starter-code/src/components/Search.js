import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleOnChange = e => {
    this.props.searchFood(e.target.value)
  }

  render() {
    return (
      <input onChange={this.handleOnChange} type="text"></input>
    )
  }
  //{ this.props.searchFood() }
}
export default Search