import React, { Component } from 'react'

class FoodSearch extends Component {
  state = {
    search: ''
  }

  handleChange = (e) => {
    let {value} = e.target;
    console.log('value', value);
    
    this.setState({search: value})

    this.props.filterSearchRes(value);

  }

  render() {
    return (
      <div>
        <form>
          <label>Search</label>
          <input type='text' 
                name='search' 
                placeholder='Search' 
                value={this.state.search}
                onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default FoodSearch