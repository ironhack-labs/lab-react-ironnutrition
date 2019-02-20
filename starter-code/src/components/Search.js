import React, { Component } from 'react';

class Search extends Component {
  constructor(){
    super()
    this.state = {search: ""}
  }

   
  handleChange =(e)=> {
    let foodSearch = e.target.value;
    this.props.searchFoodFunction(foodSearch)
  }
 

 render(){
 return( 
 <div>
   <input type="text" onChange={e => this.handleChange(e)} 
  />
 </div>
  )}
}

export default Search