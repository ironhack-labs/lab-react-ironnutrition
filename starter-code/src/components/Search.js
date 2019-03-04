import React, { Component } from "react";
import foodsJson from "../foods.json"


class Search extends Component{

  constructor(props){
    super(props)
    this.state = {
      foodList: foodsJson,
      searchName: "",

    }
  }

  changeHandler = e => {
    this.props.searchFood(e.target.value)
  }


  render(){
    return(
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={e => this.changeHandler(e)}/>
        </div>
      </div>
    )
  }
}

export default Search;