import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchStr: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.searchFoods(this.state.searchStr);
    // clears the inputs again after the form has been submitted
    this.setState({
      searchStr: ""
    });
  };

  handleChange = e => {
    this.setState(
      {
        searchStr: e.target.value
      },
      () => this.props.searchFoods(this.state.searchStr)
    );
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="searchStr"
          value={this.state.searchStr}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
