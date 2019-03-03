import React, { Component } from "react";

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
      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            className="input"
            type="text"
            name="searchString"
            value={this.state.searchString}
            onChange={e => this.handleChange(e)}
            placeholder="search"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
        <div className="panel-block">
          <button
            className="button is-link is-outlined is-fullwidth"
            onClick={event => this.handleClear(event)}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
