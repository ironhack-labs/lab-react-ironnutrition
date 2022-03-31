import 'bulma/css/bulma.css';
import React, { Component } from 'react';

export default class Search extends Component {

  state = {
    text: '',
  };

  handleChange(event) {
    let { name, value } = event.target;
    this.props.searchHandler(value)
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="text"
          placeholder="Search"
          value={this.state.text}
          onChange={e => this.handleChange(e)}
        />
      </div>
    );
  }
}
