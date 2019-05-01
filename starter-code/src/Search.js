import React, { Component } from 'react'

export default class Search extends Component {

  state = {
    searchInput: undefined,
 
  };

  search(e) {
    debugger
    const newState = { ...this.state };
    newState.searchInput = e.target.value;
    this.setState(newState);
    this.props.searchFood(this.state);
  }

  render() {
    return (
      <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                placeholder="search"
                onChange={e => this.props.searchFood(e.target.value)}
                name="searchBox"
                value={this.state.searchInput}
                
              />
            </div>
          </div>

    )
  }
}
