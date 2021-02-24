import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';

class Search extends Component {
  state = {
    search: '',
  };

  handleInput = (event) => {
    let { value, name } = event.target;
    this.setState({ [name]: value });
    this.props.filteredFoods(this.state.search);
  };

  render() {
    return (
      <div>
        
          <input
            class="input is-primary"
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleInput}
            placeholder="Search food"
          />
      </div>
    );
  }
}
export default Search;
