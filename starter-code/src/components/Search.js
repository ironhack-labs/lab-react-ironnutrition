import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      filterFoods: props.filterFoods
    }
  }

  handleSearch = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      var result = this.state.filterFoods.filter(food => {
        let myName = food.name.toLowerCase()
        let mySearch = this.state.search.toLowerCase()
        return (myName.includes(mySearch))
      })
      this.props.updateState(result)
    });
}



  render() {
    return (
      <div className="Search">
        <input type="text" name="search" value={this.state.search} onChange={(e) => this.handleSearch(e)} />
      </div>
    );
  }
}

export default Search;
