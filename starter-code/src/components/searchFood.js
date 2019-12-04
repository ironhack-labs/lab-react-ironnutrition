import React, { Component } from "react";


class SearchFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      
    };
  }
  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () => this.searchFood(this.state.name));
  };
  searchFood = src => {
    let foodsCopy = [...this.state.foods];
    foodsCopy = foodsCopy.filter(elm => elm.name.includes(src));
    this.setState({ foods: foodsCopy });
  };
  render() {
    return (
      <input
        value={this.state.name}
        name="name"
        onChange={this.handleChange}
        className="input"
        type="text"
        placeholder="Search Food"
      />
    );
  }
}
export default SearchFood;
