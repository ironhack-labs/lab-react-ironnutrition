import React, { Component } from 'react';

export class Search extends Component {
  state = {
    name: '',
  };

  handleChange = (event) => {
      let value = event.target.value
      this.props.searchFood(value)
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            onChange={(e) => this.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}

export default Search;
