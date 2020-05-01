import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    let { value } = e.target;
    this.setState({ search: value }, () => {
      this.props.searchFood(this.state.search.toLowerCase());
    });

    // Alternative (is it OK not to use 'setState' in this case?):
    // this.state.search = e.target.value;
    // this.props.searchFood(this.state.search.toLowerCase())
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar" 
          name="search"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
