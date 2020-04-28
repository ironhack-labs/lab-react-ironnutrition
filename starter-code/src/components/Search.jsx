import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="search" onChange={(e) => this.props.search(e.target.value)} />
        <button onClick={this.props.showForm}>Add New Food</button>
      </div>
    );
  }
}

export default Search;