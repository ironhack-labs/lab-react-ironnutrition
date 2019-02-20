import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  genericOnChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
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
        <h2>Search Food</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name
            <input
              onChange={event => this.genericOnChange(event)}
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Pasta"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default Search;
