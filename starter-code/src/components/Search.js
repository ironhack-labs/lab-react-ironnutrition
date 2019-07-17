import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ""
    };
  }

  handleChange = e => {
    this.props.searchFood(e.target.value);
    this.setState({
      searchInput: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          className="input"
          type="search"
          value={this.state.searchInput}
          onChange={e => this.handleChange(e)}
          placeholder="Seach a meal"
        />
      </form>
    );
  }
}

export default Search;





