import React, { Component } from "react";

class Search extends Component {
 
  constructor(props){
    super(props)
    this.state ={
      search: "",
    };
  }

    synchronizeSearch(event){
      const { value } = event.target;
      this.setState({ search: value })
      this.props.searchFood(value)
    }

  render() {

    return (
      <form>
        <h3>Search some food:</h3>
        <input value={this.state.search}
          onChange={event => this.synchronizeSearch(event)}
          type="text" name="search" placeholder="Search for..."/>
      </form>
    )
  }
  
 }

export default Search;