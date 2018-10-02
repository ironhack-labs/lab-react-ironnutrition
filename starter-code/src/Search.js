import React,{Component } from "react";

export default class Search extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <input onChange={e=>this.props.onSearch(e.target.value)} type="text" className="input search-bar" name="search" placeholder="Search" />
      </div>
    )
  }
}
