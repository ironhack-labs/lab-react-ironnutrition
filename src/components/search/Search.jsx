import { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <input
          className="mt-3 ml-4 input is-success is-normal is-rounded"
          htmlFor="search"
          id="search"
          type="text"
          name="search"
          placeholder="What are you looking for?"
          value={this.props.search}
          onChange={this.props.onSearchFood}
        ></input>
      </div>
    );
  }
}

export default Search;
