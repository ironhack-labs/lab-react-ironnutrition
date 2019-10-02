import React, { Component } from 'react'

export default class SearchBar extends Component {
  // constructor(props) {
  //   super()
  //   this.state = {
  //     search: ''
  //   }
  // }

  // async updateSearch(e) {
  //   let newSearch = {...this.state}
  //   newSearch["search"] = e.target.value
  //   await this.setState({search: e.target.value});    
  //   this.props.sendFromApp(this.state)
  // }

  render() {
    return (
      <form className='searchBar'>
        <input type="search" name="search" id="search" onChange={e => this.props.updateSearch(e)} />
      </form>
    )
  }
}
