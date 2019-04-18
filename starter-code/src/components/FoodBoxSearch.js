import React, { Component } from 'react';

class FoodBoxSearch extends Component {

  state = {
    search: "",
  }

  handleSearchInput = (event) => {

    this.setState({
      search: event.target.value
    })

    this.props.searchTheFood(event.target.value)
  }

 
  render(){
    


    return (
<div>
          <input type="text" placeholder="Search food" name="search" value={this.state.search} onChange={(e) => this.handleSearchInput(e)} />
    </div>
    )
  }
}

export default FoodBoxSearch;