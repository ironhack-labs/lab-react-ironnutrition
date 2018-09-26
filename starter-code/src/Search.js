import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  constructor (props){
    super(props)
    this.state={
      val:""
    }
  }

updateInput = (e) => {
  this.setState({val: e.target.value});
  this.props.handleSearch(e.target.value)
}

  render (){
    return(
      <div className="field">
      <label className="label">Search</label>
      <div className="control">
      <input
        type="text"
        className="input"
        onChange={e => this.updateInput(e)}
        value={this.state.val}
        />
        </div>
        </div>
    )
  }
}

export default Search