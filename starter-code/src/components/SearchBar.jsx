import React, { Component } from "react";
import './SearchBar.css'

class SearchBar extends Component {
    
  functionSearch= (e) =>{
    this.props.Prop(e.target.value)
  }

  render() {
    return (
      <div className="bar">
        <input type="text" onChange={e => this.functionSearch(e)}/>
      </div>
    );
  }
}

export default SearchBar;
