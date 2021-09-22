import React from 'react'

class Search extends React.Component {
  state = {
    searchValue: ""
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      ...this.state,
      searchValue: value
    })

    this.props.filterFoodsBySearch(value)
  }

  render() {
    return (
      <input type="search" value={this.state.searchValue} onChange={(e) => this.handleChange(e)} />
    )
  }
}

export default Search
