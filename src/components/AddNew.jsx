import React, { Component } from "react";
import Form from "./Form";

class AddNew extends Component {
  state = {
    calories: 0,
    image: "",
    name: "",
    quantity: 0,
    open: false
  };

  setForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addTheMeal(this.state);
    this.setState({
      calories: 0,
      image: "",
      name: "",
      quantity: 0,
      open: false
    });
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  showForm = () => {
    if (this.state.open) {
      return (
        <Form
          submitHandle={this.handleFormSubmit}
          changeHandle={this.setForm}
        />
      );
    } else {
      return (
        <button className="button is-primary" onClick={this.toggleOpen}>
          Add New Meal
        </button>
      );
    }
  };

  render() {
    return <div>{this.showForm()}</div>;
  }
}

export default AddNew;
