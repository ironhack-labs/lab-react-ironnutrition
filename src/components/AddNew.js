import React, { Component } from "react";

class AddNew extends Component {
  state = {
    name: "",
    calories: 0,
    image: "",
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
      name: "",
      calories: 0,
      image: "",
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
        <form onSubmit={this.handleFormSubmit} className="column is-half">
          <div className="field">
            <label className="label">Name:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.setForm}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Calories:</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="calories"
                onChange={this.setForm}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image URL:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="image"
                onChange={this.setForm}
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </form>
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
