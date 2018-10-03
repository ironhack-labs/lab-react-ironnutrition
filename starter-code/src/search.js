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

  updateSearch = event => {
    const { value } = event.target;
    this.setState({search:event.target.value})
    this.props.searchFood(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          placeholder="Search Food Name"
          onChange={(e) => this.updateSearch(e)}
        />
      </div>
    );
  }
}
export default Search;
