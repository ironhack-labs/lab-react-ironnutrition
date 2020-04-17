import React, { Component } from 'react';

class Search extends Component {

  state = {
    search: '',
  }

  searchFood = (e) => {
    this.setState({
      search: e.target.value,
    })
    this.props.searchFood(this.state.search);
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <input className="input input-search" value={search} onChange={this.searchFood} type="text" placeholder="Search"></input>
      </div>
    );
  }
}

export default Search;