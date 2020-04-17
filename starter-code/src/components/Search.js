import React, { Component } from 'react';

class Search extends Component {

  searchFood = (e) => {
    this.props.filterFood(e.target.value);
  }

  render() {
    return (
      <div>
        <input className="input input-search" onChange={this.searchFood} type="text" placeholder="Search"></input>
      </div>
    );
  }
}

export default Search;