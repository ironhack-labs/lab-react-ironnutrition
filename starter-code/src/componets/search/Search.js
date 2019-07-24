import React, { Component } from 'react';
import './Search.css';


class Search extends Component {
    render() {

        return (
    
<div class="field">
  <div class="control">
    <input onChange={this.props.change} class="input is-primary" type="text" placeholder="Search" />
</div>  
        </div>
        );
      }
    



}
    export default Search;
