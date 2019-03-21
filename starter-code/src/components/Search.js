import React, { Component } from 'react'

export default class Search extends Component {

  constructor(props) {

    super(props)

    this.state = {
        search: '',
        
    }
  }


  handleChange = e => {
    let { value } = e.target;
    this.setState({ search: value });
    this.props.searchFood(this.state.search)
    // console.log(e.target.value)
  }


  render() {
    return (
      <div>
        <input type="text" name="search" value={this.state.search} onChange={(e) => this.handleChange(e)} /><br></br>
      </div>
    )
  }
}
