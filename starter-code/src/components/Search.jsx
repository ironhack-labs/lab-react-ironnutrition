import React, { Component } from 'react'

 class Search extends Component {


    handleSearch = (event) => {
      
        this.props.search(event.target.value)
      }



  render() {
    return (
      <div>
         <input  id="search-bar" className="input" type="text" placeholder="Text input" onChange={(e) => this.handleSearch (e)} />
      </div>
    )
  }
}


export default Search;