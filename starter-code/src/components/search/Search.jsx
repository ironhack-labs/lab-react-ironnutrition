import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }
  
  inputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value }, 
      () => this.props.search(this.state))
  }

  render() {
    return(
    <form  className="field">
      <label className="label">Search:</label>
      <input type="search" className="input" name="search" value={this.state.search} onChange={(e) => this.inputChange(e)} />
    </form>
    )
  }
}

export default Search;