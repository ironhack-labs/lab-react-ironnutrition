import React, { Component } from 'react';

class searchBar extends Component {
  state = {
    input: '',
  };
  handleChange = (event) => {
    const { value } = event.target;  
    this.props.filteredFood(event.target.value);
    this.setState({
        input: value
      });
};

  render() {
    return (
      <div>
        <label>Search</label>
        <input
          className="input"
          type="text"
          placeholder="searchBar"
          value={this.state.input}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export default searchBar;