import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  changeHandler = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state)
    this.props.food(this.state)
    this.setState({
      search: e
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input class="input" type="text" name="search" placeholder="search" value={this.state.search} onChange={(e) => this.changeHandler(e)} />
          </p>
          <p className="control">
            <a class="button is-info" type="button" value="submit">
              Search</a>
          </p>
        </div>
      </form>
    )
  }
}

export default Search;