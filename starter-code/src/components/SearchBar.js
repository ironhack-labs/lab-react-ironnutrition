import React from 'react'

class SearchBar extends React.Component {
  state = {
    searchText: ""
  }

  handleChange = (e => {
    this.setState({
      [e.target.name]: e.target.value
    })

    this.props.searchFood(e.target.value)
  })


  render(){
    return (
      <div className="mt-4">
        <input name="searchText" className="input mt-2 mb-2" placeholder="Search food..." type="text" value={this.state.searchText} onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default SearchBar