import React, { Component } from 'react';
import './SearchBar.css'
import { timingSafeEqual } from 'crypto';

class SearchBar extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  inputHandler(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value 
    }, () => {
      this.props.search(this.state.search)
    })
  }

  render() {
    return (
      <input className="searchBar" name="search" type="text" placeholder="search" onChange={(e) => this.inputHandler(e)} />
    );
  }
}

export default SearchBar;