import React, { Component } from "react";

class Search extends Component {
  state = {
    query: ""
  };

  handleInputChange = e => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <form>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Search for..."
              ref={input => (this.search = input)}
              onChange={this.props.filter()}
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Search;
