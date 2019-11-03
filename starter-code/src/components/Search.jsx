import React, { Component } from 'react';

export default class Search extends Component {

  state = {
    query: '',
  }

  handleChange = (e) => {
    const  { filterFunc } = this.props;
    this.setState({ query: e.target.value },() => { filterFunc(this.state.query)
    });
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <label htmlFor="searchBox">Search</label>
        <input onChange={(e) => this.handleChange(e)} type="search" name="query" id="searchBox" value={query}/>
      </div>
    )
  }

}