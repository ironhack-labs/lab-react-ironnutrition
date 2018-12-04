import React, { Component } from 'react'

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      name: ""}
  }

  searchHandler = (e) => {
    this.setState(
        { ...this.state, name: e.target.value }
    )
}

  render() {

    return (
      <div>
         <label className="label">Search:</label>
         <input className="input" type="text" value={this.state.name} onChange={this.searchHandler}/>
      </div>
    )
  }
}

// value={this.state.image}
