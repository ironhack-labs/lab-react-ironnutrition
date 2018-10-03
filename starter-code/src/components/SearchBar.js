import React, { Component } from "react";

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
          
        }
      }
      
      render(){
          return(
            <label>Search</label>
            <input type="text" onChange={e => this.setState({ search: e.target.value })}/>
          )
      }
}


export default SearchBar;