import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';

class Search extends Component {
  state = {
      search: ""
  };

  searchHandler = (event) => {
      event.preventDefault();

      this.props.instantSearchHandler(this.state.search)

      this.setState({
          search: event.target.value
      })
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-6">
          <div className="field">
            <div className="label">Search food</div>
            <div className="control">
              <input className="input" name="search" value={this.state.search} onChange={this.searchHandler} placeholder="search for food"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
