import React, { Component } from "react";

class AddForm extends Component {
  constructor() {
    super(); //this runs React Component's constructor

    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const foodObj = this.state;
    this.props.addTheFood(foodObj);
    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    // console.log(this.state);

    return (
      <div className="field">
        <form onSubmit={this.handleFormSubmit}>
          <label className="label">Name:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>

          <label className="label">Calories:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="calories"
              onChange={this.handleChange}
              value={this.state.calories}
            />
          </div>

          <label className="label">Image:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>

          <input className="button is-info" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddForm;
