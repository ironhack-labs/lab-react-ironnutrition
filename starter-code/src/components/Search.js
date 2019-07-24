import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    }
  }

  submitHandler(value) {
    this.props.filterFoodsHandler(value);
  }

  searchHandler(event) {
    let { name, value } = event.target;
    this.submitHandler(value);
    this.setState({
      [name]: value
    });
  }

  

  render() {
    return (
      <div className="field">
        <label className="label">Search</label>
        <div className="control">
          <input className="input" name="inputText" type="text" placeholder="Search..." onChange={(event) => this.searchHandler(event)} value={this.state.inputText}/>
        </div>
      </div>
    )
  }
}

export default Search;
