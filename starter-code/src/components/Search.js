import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  changeHandler = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.searchFood(this.state.search); /* this is lifting the state */
  };

  render() {
    return (
      // <form onSubmit={this.handleFormSubmit}>

      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            name="search"
            placeholder="search here"
            onChange={this.changeHandler}
          />
        </p>
      </div>

      // </form>
    );
  }
}

export default Search;
