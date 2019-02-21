import React, { Component } from "react";

import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ""
    };
  }

  genericOnChange(event) {
    const { value, name } = event.target;
    this.props.searchSubmit(value);
    this.setState({ [name]: value });
  }

  handleClear(event) {
    event.preventDefault();

    this.props.searchClear();

    this.setState({
      searchString: ""
    });
  }

  render() {
    return (
      <section className="Search">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={event => this.genericOnChange(event)}
              value={this.state.searchString}
              type="text"
              name="searchString"
              placeholder="Type here"
            />
          </div>
          <div className="control">
            <a
              className="button is-info"
              onClick={event => this.handleClear(event)}
            >
              Clear Search
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
