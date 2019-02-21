import React, { Component } from 'react'; 

class Search extends Component {
    constructor(props){
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
      this.props.searchFood(e.target.value)
      console.log(e.target.value)
      }
    render(){
      return (
        <div className="field">
          <input type="text" 
          onChange={event => this.handleChange(event)}
          className="input search-bar"
          placeholder="Search"
          />
        </div>
      )
    }
  }

  export default Search;