import React, { Component } from 'react';
import FoodBox from './../foodbox/FoodBox.js'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      search: []
    };
    this.findFood = this.findFood.bind(this);
  }

  addText (e) {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value
    });
  }

  findFood(e) {
    this.addText(e);
    // const { value } = e.currentTarget;
    // const search = this.state.search;
    // this.props.foodArray.forEach((element) => {
    //   if (element.name.toLowerCase().includes(value)) {
    //     search.push(element);
    //   }
    // });
    // this.props.updateState(search, () => {
    //   this.setState({ search: [] });
    // });
  }

  render() {
    return(
      <div>
        <div>
          <label>Search</label>
          <input type="text" name="name" value={this.state.name} onChange={this.findFood}/>
        </div>
        <FoodBox name={this.state.name} foodArray={this.props.foodArray} updateState={this.props.updateState}/>
      </div>
      
    )
  }
}

export default Search