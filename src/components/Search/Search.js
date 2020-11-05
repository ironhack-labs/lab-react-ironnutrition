import React, { Component } from 'react';

class Search extends Component {
  state = {
    foodName: '',
  };

  handleSearchFoods = (event) => {
    this.setState({ foodName: event.target.value }, () => {
      this.props.filterFoods(this.state.foodName);
    });
  };

  render() {
    return (
      <div className="mb-5">
        <input
          className="input search-bar"
          type="text"
          name="foodName"
          placeholder="Search"
          value={this.state.foodName}
          onChange={(event) => this.handleSearchFoods(event)}
        ></input>
      </div>
    );
  }
}

export default Search;
