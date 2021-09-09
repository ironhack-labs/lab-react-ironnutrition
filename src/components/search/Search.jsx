import React from 'react';
import './Search.css';

export default class Search extends React.Component {
    search = (e) => {
        this.props.onSearch(e.target.value);
      };
    
    render() {
        return(
            <input
        onChange={this.search}
        type="text"
        placeholder="Search"
      ></input>
        )
    }
}