import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    searchName: "",
  }

  searchFunction = (e) => {
    let {name, value} = e.target;
    this.setState({[name]: value})
    let word = value;

    this.props.searchWord(word);
  }
  render() {
    return (
      <div>
        <input type="text" name="searchName" placeholder="Search by name" value={this.state.searchName} onChange={this.searchFunction}/>
      </div>
    )
  }
}
