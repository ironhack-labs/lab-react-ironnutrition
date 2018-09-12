import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    //   this.state = {
    //     searchText: ''
    //   };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange(e);
  }

  render() {
    return (
      <form>
        <input
          className="input is-rounded"
          type="text"
          style={{ width: '300px' }}
          name="searchText"
          placeholder="Search Here"
          value={this.props.text}
          onChange={this.handleChange}
        />
        <br />
      </form>
    );
  }
}

export default Search;
