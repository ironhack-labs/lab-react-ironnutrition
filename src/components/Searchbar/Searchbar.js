import React, { Component } from 'react'

class Searchbar extends Component {

  state = {
    search: '',
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState( { search: value }  )
  }

  render() {
    return (
      <form>
        <input className="is-large" value={this.state.search} onChange={this.handleInput}></input>
      </form>
    )
  }
}

export default Searchbar;