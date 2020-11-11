import React, { Component } from 'react';

class Search extends Component {
  state = {
    searchTerm: '',
  };

  editSearchTerm = (e) => {
    e.preventDefault();
    this.props.searchOnTime(e.target.value);
    this.setState({ 
        searchTerm: e.target.value 
    });
    
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
          placeholder="Search a food!"
        />
      </div>
    );
  }
}
export default Search;
