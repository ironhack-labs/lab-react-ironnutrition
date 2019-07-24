import React, {Component} from 'react'

class SearchBar extends Component{

  handleSearch(event){
    let {value} = event.target
    this.props.filterHandler(value)
  }
  render() {
    return(
      <input type="text" name="word" value={this.props.word} onChange={(e) => this.handleSearch(e)}/>
    )
  }
}

export default SearchBar