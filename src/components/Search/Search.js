import React, { Component }  from 'react';

class Search extends Component {
  render() {

    return (
      <div className="wrapper">
      <h1>Búsqueda</h1>
        <label htmlFor="search">Search</label>
        <input id="food" name="food" type="text" value={this.props.search} onChange={this.props.searchFood} /> 
      </div>
    )
  }
}

export default Search