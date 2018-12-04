import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super();
    this.props=props;
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.filterList(event);
    // this.props.addTheMovie(this.state);
  };

  render() {
    return (
        <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          onChange={this.handleFormSubmit}
        />
      </div>
    )
  }
}
