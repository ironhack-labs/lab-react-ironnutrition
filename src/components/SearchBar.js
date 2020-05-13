import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        name: '',
      }

  handleInput = (e) => {
    let {value} = e.target
    
    this.setState({ name: value }, () => {this.props.searchedFood(value)})
    
    };
  

  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="name"
          placeholder="Search"
          onChange={this.handleInput}
          value={this.state.name}
        />
       
      </div>
    );
  }
}

export default SearchBar;
