import React, { Component } from "react";


class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }

  handleOnChange = e => {
          this.setState({searchValue: e.target.value})
  };
    
    
    // findFood = e => {
    //     const searchfood = [...]


    // }

  render() {
    return (
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Find a repository"
            value={this.state.searchValue}
            onChange={e => this.handleOnChange(e)}
          />
        </p>
        <p className="control">
          <a className="button is-info">Search</a>
        </p>
      </div>
    );
  }
}

export default SearchBar;