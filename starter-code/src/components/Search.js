import React, {Component} from 'react';

class Search extends Component{

  handleSearch = (event) => {
    this.props.search(event.target.value)
  }

  render() {
  return (
    <div>
      <input className="input is-rounded" type="text" placeholder="Search for food" onChange={(e) => this.handleSearch (e)}></input>
    </div>
  )
}
}

export default Search