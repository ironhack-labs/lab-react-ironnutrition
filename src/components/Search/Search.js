import React, {Component} from 'react';

class Search extends Component{
  render(){
    return (
      <div className="field is-grouped">
  <p className="control is-expanded">
    <input className="input" type="text" placeholder="Find a repository"/>
  </p>
  <p className="control">
    <button className="button is-info">
      Search
    </button>
  </p>
</div>
    )
  }
}

export default Search;
