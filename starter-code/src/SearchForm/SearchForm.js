import React, { Component } from 'react'

export default class SearchForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }



  changeSearch = (e) => {
    let newState = {
      ...this.state,
      search: e.target.value
    }

    this.props.evento(newState.search)

    this.setState(newState)
  }


  render() {
    return (
      <input type="text" onChange={this.changeSearch} value={this.state.search} />
    )
  }
}
