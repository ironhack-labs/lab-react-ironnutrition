import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(){
    super();
    this.state = {
      searchField: ''
    }
  }





  render() {
    return (
      <div>
        <input type="text" className="input search-bar" name="search" placeholder="Search" onChange={(e) => this.setState({searchField: e.target.value})}/>
      </div>
    )
  }
}