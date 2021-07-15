import { Component } from 'react'; //1. import all necessary stuff only where needed
//need to import React?????????????
//2. create class component
//export class component
//in component: create state,
//create event handlers/funcions

//transform class component to func later
//refactor code

class Search extends Component {       //or: export default class....already here instead of at buttom
  render() {
    return (
      <div>
        <input
          onChange={this.onSearch}
          id="foodSearchBar"
          label="Search yummieh food here"
          placeholder="Search yummieh food here"
          name="searchBar"
        />
      </div>
    );
  }
}

export default Search;
