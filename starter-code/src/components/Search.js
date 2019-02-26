import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.props.onFilter(event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <input className="input is-info has-margin-top-30 has-margin-bottom-30" 
              type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange}/> 
    );
  }

}
