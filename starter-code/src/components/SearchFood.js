import React, { Component } from 'react'

export default class SearchFood extends Component {

  constructor() {
    super()

    this.state = {
        foodSearchDetails: ""
    }
}


  handleSearchChange(e) {
    let foodSearch = e.target.value
    this.props.searchFoodFn(foodSearch)
  }



  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Search..."
          onChange={(e) => this.handleSearchChange(e)}
           />
      </div>
    )
  }
}
