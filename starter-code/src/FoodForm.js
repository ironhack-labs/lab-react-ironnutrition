import React, { Component } from "react";

export default class FoodForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      calories: 0,
      image: ""
    };
  }

  updateFormData(e, field, type) {
    let newState = { ...this.state };
    newState[field] = type === "number" ? +e.target.value : e.target.value;

    this.setState(newState);
  }

  sendState(e) {
    e.preventDefault();
    this.props.sendStateFromApp(this.state);
  }

  render() {
    return (
      <form className="form">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.updateFormData(e, "name", "text")}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="calories"
              placeholder="Calories"
              value={this.state.calories}
              onChange={e => this.updateFormData(e, "calories", "number")}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="image"
              placeholder="Image URL"
              value={this.state.image}
              onChange={e => this.updateFormData(e, "image", "text")}
            />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <button
              type="submit"
              className="button btn is-primary"
              onClick={e => this.sendState(e)}
            >
              Create food
            </button>
          </p>
        </div>
      </form>
    );
  }
}
