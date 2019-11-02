import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  updateSearch = (e) => {
    this.setState({
      name: e.target.value
    }, () => {
      this.props.searchFunction(this.state.name);
    });
  }

  render () {
    return (
      <div>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </div>
    );
  }
};

export default Search;
