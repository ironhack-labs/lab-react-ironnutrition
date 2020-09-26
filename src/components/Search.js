import React, { Component } from "react";
//import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  OnChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preDefault();
    this.props.foodSubmit(this.state);
    this.setState = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  render() {
    return (
      <section className="FoodForm">
        <h2>Search</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.OnChange}
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Food"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default Search;