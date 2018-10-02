import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(){
    super();
    this.state = {
      searchField: ''
    }
  }

  search(string){
    this.setState({searchField: string})
    let searchField = this.state.searchField;
    return this.props.stringForFilter(searchField)
  }



  render() {
    let {searchField} = this.state;
    return (
      <div>
        <input type="text" className="input search-bar" placeholder="Search" value={searchField} onChange={(string) => this.search(string.target.value)}/>
      </div>
    )
  }
}