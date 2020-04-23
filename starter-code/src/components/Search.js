import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.search} />
        <button onClick={this.props.showForm}>Show Form</button>
      </div>
    );
  }
}

export default Search;
