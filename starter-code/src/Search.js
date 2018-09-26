import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props)
    this.state ={
      search: ''
    }
  }
  updateSearch = (event) =>{
    const {value} = event.target
    this.setState({
      search: value
    })
    this.props.searchFood(value)
    // console.log(this.state.search)
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.search} placeholder="Search for Food" onChange={this.updateSearch.bind(this)} />
      </div>
    )
  }
}

export default Search
