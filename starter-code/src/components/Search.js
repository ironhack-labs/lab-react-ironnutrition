import React, { Component } from 'react'

export default class Search extends Component {

  handleChange = (e) => {
    let value = e.target.value
    this.props.searchFood(value)    
    console.log(value)
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
