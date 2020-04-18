import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  state = {
    search: "",
  };

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
    });
    this.props.onChange(e.target.value);
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              className="inputSearch"
              id="search"
              type="text"
              name="search"
              value={search}
              onChange={this.handleInput}
              placeholder="Search"
            ></input>
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </div>
    );
  }
}
