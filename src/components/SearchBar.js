import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.setSearchTerm = this.setSearchTerm.bind(this);
    
  }
  
  state={
    searchTerm : ""
  }
  setSearchTerm(e){

    this.setState({
        searchTerm:e.target.value
    })
    this.props.handleSearch(e.target.value);
  }

    render() {
        return (
            <div>
            <input
              type="text"
              className="input search-bar"
              name="searchTerm"
              placeholder="Search"
              onChange={this.setSearchTerm}
              value={this.state.searchTerm}
              handleSearch={this.setSearchTerm}
            />
          </div>
        );
    }
}

export default SearchBar;