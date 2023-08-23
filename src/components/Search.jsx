import React, { Component } from "react";
import { Input } from "antd";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    this.props.onSearch(searchTerm); // Call the onSearch prop with the search term
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Search for food"
          value={this.state.searchTerm}
          onChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default Search;
