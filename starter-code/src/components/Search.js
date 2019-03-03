import React, { Component } from "react";

class Search extends Component{

  constructor(props){
    super(props)
    this.state = {
      searchName: ""
    }
  }

  changeHandler = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      searchName: e.target.value
    })
  }

  render(){
    console.log(this.state);
    return(
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={e => this.changeHandler(e)}/>
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    )
  }
}

export default Search;