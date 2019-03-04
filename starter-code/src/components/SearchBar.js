import React, { Component } from "react";

class SearchBar extends Component {
  state = { search: "" };

  handleChange = e => {
    this.setState({ search: e.target.value });
    this.props.update(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="col">
          <input
            type="text"
            className="input search-bar"
            name="search"
            placeholder="Search"
            value={this.state.search}
            onChange={e => this.handleChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
