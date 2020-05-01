import React, { Component } from 'react'
import 'bulma/css/bulma.css'

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = { search: '' }
  }

  searchHandler = e => {
    this.setState({ search: e.target.value }, () => {
      this.props.filterHandler(this.state.search)
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          value={this.state.search}
          onChange={this.searchHandler}
        />
      </div>
    )
  }
}
