import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    search: '',
  };
  handleChange(event) {
    const { value } = event.target;
    this.setState({ search: value }, () => {
      this.props.findFood(this.state.search);
    });
  }
  render() {
    return (
      <div className="form-item">
        <input
          placeholder="Search..."
          type="text"
          name="search"
          value={this.state.search}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}
