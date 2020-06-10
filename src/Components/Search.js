import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: '',
  };
  handleChange = (event) => {
    //Pass the input value to the app.js component, 
    //so that we can filter the foods array
    this.props.filterFood(event.target.value);
    this.setState({ query: event.target.value });
    
  };
  render() {
    return (
      <div>
        <label>Search by Name</label>
        <input
          className="input"
          type="text"
          placeholder="Search.."
          value={this.state.query}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default Search;
