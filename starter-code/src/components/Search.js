import React, { Component } from 'react'

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      value: ''
    }
  }

  handleFilterCb = (e) => {
    this.setState({[e.target.name]: e.target.value})
    this.props.setFilter(e.target.value)
  }

  render() {
    return (
        <input style={{marginBottom: '25px'}} placeholder="Search food" className="input is-fullwidth is-primary is-rounded" onChange={this.handleFilterCb} type="search" name="value" id="search" value={this.state.value}/>
    )
  }
}
