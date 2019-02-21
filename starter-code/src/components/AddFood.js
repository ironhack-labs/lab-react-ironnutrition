import React, { Component } from "react";

import "./AddFood.css";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }

  genericOnChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.foodSubmit(this.state);
    console.log("Saved a new FOOD item.", this.state);

    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  }

  render() {
    return (
      <section className="AddFood">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              onChange={event => this.genericOnChange(event)}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="Food item name"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Calories</label>
          <div class="control">
            <input
              class="input"
              type="text"
              onChange={event => this.genericOnChange(event)}
              value={this.state.calories}
              name="calories"
              placeholder="Nb of calories"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input
              class="input"
              type="text"
              onChange={event => this.genericOnChange(event)}
              value={this.state.image}
              name="image"
              placeholder="Image URL"
            />
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button
              class="button is-info"
              onClick={event => this.handleSubmit(event)}
            >
              Save
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default AddFood;
