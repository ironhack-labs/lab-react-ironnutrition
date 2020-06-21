import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search" name="search" onChange={e => this.props.searching(e.target.value)} />
      </div>
    )
  }
}

export default Search;