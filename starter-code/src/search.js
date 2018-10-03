import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch(value){
    this.props.searchFood(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          placeholder="Search Food Name"
          onChange={(e) => this.setState({search:e.target.value})}
        />
      </div>
    );
  }
}
export default Search;
