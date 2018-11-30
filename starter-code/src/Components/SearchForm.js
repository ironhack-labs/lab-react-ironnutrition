import React, { Component } from "react";

class SearchForm extends Component {



  render() {

    return(
      <label>
        SearchBar: 
        <input onChange={event => this.props.searchFor(event)} value={this.props.search} type="text" name="search" placeholder="Search your Food here" />
      </label>

    )
  }
}

export default SearchForm;