import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { 
      name: '',
    }
}

  // handleSearch(e) {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={e => this.props.handleSearch(e)} type="text" name="query" placeholder="Search here..." />
        <p>You search {this.props.query}</p>
      </div>
    );
  }
}

export default SearchBar;