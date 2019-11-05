import React, { Component } from "react";

class Search extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          defaultValue=""
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Search;
