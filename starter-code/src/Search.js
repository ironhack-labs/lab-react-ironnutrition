import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  inputHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    this.props.update(value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          value={this.state.search}
          onChange={e => this.inputHandler(e)}
        />
      </div>
    );
  }
}

export default Search;
