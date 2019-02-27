import React, { Component } from "react";

class SearchBar extends Component {

  onChangeSearch = (event) => {
    this.props.onSearch(event.target.value);
  }

  render() {
    return(
      <div>
        <input className="input has-margin-top-30 has-margin-bottom-30" type="text" placeholder="Search" onChange={ this.onChangeSearch } />
      </div>
    )
  }
}

export default SearchBar;

  