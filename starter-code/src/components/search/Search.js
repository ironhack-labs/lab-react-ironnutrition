import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.findFood = this.findFood.bind(this);
  }

  addText (e) {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value
    })
  }

  findFood(e) {
    this.addText(e);
    const { value } = e.currentTarget;
    this.props.foodArray.filter((element) => {
      return element.name.toLowerCase().includes(value);
    });
    this.props.updateState(this.props.foodArray);
  }

  render() {
    return(
      <div>
        <label>Search</label>
        <input type="text" name="name" value={this.state.name} onChange={this.findFood}/>
      </div>
    )
  }
}

export default Search