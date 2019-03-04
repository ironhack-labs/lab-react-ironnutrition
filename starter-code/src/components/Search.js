import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }

  handleChange(event) {
    let { value, name } = event.target;
    this.props.searchSubmit(value);
    this.setState({
      [name]: value
    });
  }

  handleClear = event => {
    event.preventDefault();
    this.props.searchClear();
    this.setState({
      searchString: ""
    });
  };

  render() {
    return (
      <div className="search">
        <div className="control">
          <p>
            <input
              className="input"
              type="text"
              name="searchString"
              value={this.state.searchString}
              onChange={e => this.handleChange(e)}
              placeholder="search"
            />
          </p>
          <div className="control">
            <button
              className="button is-link"
              onClick={event => this.handleClear(event)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
